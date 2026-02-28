import React, { useState, Children, useRef, useLayoutEffect, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidStepper.css';

export interface AcidStepperProps extends React.HTMLAttributes<HTMLDivElement> {
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
}

export const AcidStepper = forwardRef<HTMLDivElement, AcidStepperProps>(({
    children,
    initialStep = 1,
    onStepChange = () => { },
    onFinalStepCompleted = () => { },
    stepCircleContainerClassName = '',
    stepContainerClassName = '',
    contentClassName = '',
    footerClassName = '',
    backButtonProps = {},
    nextButtonProps = {},
    backButtonText = 'BACK_PREV',
    nextButtonText = 'STEP_CONT',
    disableStepIndicators = false,
    className,
    ...rest
}, ref) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const [direction, setDirection] = useState(0);
    const stepsArray = Children.toArray(children);
    const totalSteps = stepsArray.length;
    const isCompleted = currentStep > totalSteps;
    const isLastStep = currentStep === totalSteps;

    const updateStep = (newStep: number) => {
        setCurrentStep(newStep);
        if (newStep > totalSteps) {
            onFinalStepCompleted();
        } else {
            onStepChange(newStep);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setDirection(-1);
            updateStep(currentStep - 1);
        }
    };

    const handleNext = () => {
        if (!isLastStep) {
            setDirection(1);
            updateStep(currentStep + 1);
        }
    };

    const handleComplete = () => {
        setDirection(1);
        updateStep(totalSteps + 1);
    };

    return (
        <div className={clsx('ac-stepper-outer', className)} ref={ref} {...rest}>
            <div className={clsx('ac-stepper-inner', stepCircleContainerClassName)}>
                <div className={clsx('ac-stepper-indicator-row', stepContainerClassName)}>
                    {stepsArray.map((_, index) => {
                        const stepNumber = index + 1;
                        const isNotLastStep = index < totalSteps - 1;
                        return (
                            <React.Fragment key={stepNumber}>
                                <StepIndicator
                                    step={stepNumber}
                                    disableStepIndicators={disableStepIndicators}
                                    currentStep={currentStep}
                                    onClickStep={(clicked: number) => {
                                        setDirection(clicked > currentStep ? 1 : -1);
                                        updateStep(clicked);
                                    }}
                                />
                                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
                            </React.Fragment>
                        );
                    })}
                </div>

                <StepContentWrapper
                    isCompleted={isCompleted}
                    currentStep={currentStep}
                    direction={direction}
                    className={clsx('ac-stepper-content-wrapper', contentClassName)}
                >
                    {stepsArray[currentStep - 1]}
                </StepContentWrapper>

                {!isCompleted && (
                    <div className={clsx('ac-stepper-footer', footerClassName)}>
                        <div className={clsx('ac-stepper-nav', currentStep !== 1 ? 'spread' : 'end')}>
                            {currentStep !== 1 && (
                                <button
                                    onClick={handleBack}
                                    className="ac-stepper-back-btn"
                                    {...backButtonProps}
                                >
                                    <span className="ac-ps-meta">[{backButtonText}]</span>
                                </button>
                            )}
                            <button
                                onClick={isLastStep ? handleComplete : handleNext}
                                className="ac-stepper-next-btn"
                                {...nextButtonProps}
                            >
                                <span className="ac-ps-meta">{isLastStep ? 'COMMIT_END' : nextButtonText}</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }: any) {
    const [parentHeight, setParentHeight] = useState(0);

    return (
        <motion.div
            className={className}
            style={{ position: 'relative', overflow: 'hidden' }}
            animate={{ height: isCompleted ? 0 : parentHeight }}
            transition={{ type: 'spring', duration: 0.4 }}
        >
            <AnimatePresence initial={false} mode="sync" custom={direction}>
                {!isCompleted && (
                    <SlideTransition key={currentStep} direction={direction} onHeightReady={(h: number) => setParentHeight(h)}>
                        {children}
                    </SlideTransition>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function SlideTransition({ children, direction, onHeightReady }: any) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
    }, [children, onHeightReady]);

    return (
        <motion.div
            ref={containerRef}
            custom={direction}
            variants={{
                enter: (dir: number) => ({
                    x: dir >= 0 ? '-100%' : '100%',
                    opacity: 0,
                    scale: 0.95
                }),
                center: {
                    x: '0%',
                    opacity: 1,
                    scale: 1
                },
                exit: (dir: number) => ({
                    x: dir >= 0 ? '50%' : '-50%',
                    opacity: 0,
                    scale: 1.05
                })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
        >
            {children}
        </motion.div>
    );
}

export function AcidStep({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx('ac-step', className)} {...props}>{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }: any) {
    const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

    const handleClick = () => {
        if (step !== currentStep && !disableStepIndicators) onClickStep(step);
    };

    return (
        <motion.div onClick={handleClick} className="ac-step-indicator-wrapper" animate={status} initial={false}>
            <motion.div
                variants={{
                    inactive: { scale: 1, backgroundColor: '#000', borderColor: '#27272a', color: '#52525b' },
                    active: { scale: 1.2, backgroundColor: '#000', borderColor: '#fff', color: '#fff' },
                    complete: { scale: 1, backgroundColor: '#fff', borderColor: '#fff', color: '#000' }
                }}
                transition={{ duration: 0.3 }}
                className="ac-step-indicator"
            >
                {status === 'complete' ? (
                    <CheckIcon className="ac-step-check" />
                ) : (
                    <span className="ac-ps-meta">{String(step).padStart(2, '0')}</span>
                )}
            </motion.div>
        </motion.div>
    );
}

function StepConnector({ isComplete }: any) {
    return (
        <div className="ac-step-connector-bg">
            <motion.div
                className="ac-step-connector-fill"
                initial={false}
                animate={{ width: isComplete ? '100%' : '0%' }}
                transition={{ duration: 0.4 }}
            />
        </div>
    );
}

function CheckIcon(props: any) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}
