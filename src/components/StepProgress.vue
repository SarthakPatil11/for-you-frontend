<template>
    <div class="stepper">
        <div v-for="(step, index) in steps" :key="index" :class="{ active: currentStep === index }" class="step">
            {{ step }}
        </div>
        <div class="controls">
            <button :disabled="currentStep === 0" @click="prevStep">Prev</button>
            <button :disabled="currentStep === steps.length - 1" @click="nextStep">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepProgress',
    data() {
        return {
            steps: ['Step 1', 'Step 2', 'Step 3'], // Array of steps
            currentStep: 0, // Index of the current step
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
    },
};
</script>

<style>
.stepper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.step {
    flex: 1;
    text-align: center;
    padding: 10px;
}

.step.active {
    font-weight: bold;
}

.controls {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

button {
    margin: 0 5px;
}
</style>
