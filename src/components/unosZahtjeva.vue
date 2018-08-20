<template>
<section class="section">
    <br>
    <br>
    <br>
    <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <horizontal-stepper :steps="demoSteps" @completed-step="completeStep"
                                    @active-step="isStepActive" @stepper-finished="alert"
                >                     
                </horizontal-stepper>
            </div>
        </div>
    </div>
</section>
</template>

<script>
  import HorizontalStepper from 'vue-stepper';
 
    // This components will have the content for each stepper step.
    import StepOne from './StepOne.vue';
    import StepTwo from './StepTwo.vue';
    import Step3 from './Step3.vue';
    export default {
        components: {
            HorizontalStepper
        },
        data(){
            return {
                demoSteps: [
                    {
                        icon: 'mail',
                        name: 'prvi',
                        title: 'Personal info',
                        subtitle: '',
                        component: StepOne,
                        completed: true
 
                    },
                    {
                        icon: 'report_problem',
                        name: 'drugi',
                        title: 'Business status',
                        subtitle: '',
                        component: StepTwo,
                        completed: true
                    },
                    {
                        icon: 'announcement',
                        name: 'treci',
                        title: 'Additional data',
                        subtitle: '',
                        component: Step3,
                        completed: true
                    },
                    
                ]
            }
        },
        methods: {
            // Executed when @completed-step event is triggered
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            // Executed when @active-step event is triggered
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            // Executed when @stepper-finished event is triggered
            alert(payload) {
                alert('end')
            }
        }
    }
</script>
<style>
.content {
    padding-bottom: 1px;
    padding-top: 1px;
}

.stepper-box{
        box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

</style>
