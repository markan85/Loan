<template>
    <!-- <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input :class="['input', ($v.form.username.$error) ? 'is-danger' : '']" type="text" placeholder="Text input"
                       v-model="form.username">
            </div>
            <p v-if="$v.form.username.$error" class="help is-danger">This username is invalid</p>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input :class="['input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"  type="text" placeholder="Email input" v-model="form.demoEmail">
            </div>
            <p v-if="$v.form.demoEmail.$error" class="help is-danger">This email is invalid</p>
        </div>
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea :class="['textarea', ($v.form.message.$error) ? 'is-danger' : '']"  placeholder="Textarea" v-model="form.message"></textarea>
            </div>
        </div>
    </div> -->
     <div class="" id="section-apply">
                            <div class="bg-light pinside60">                             
                                <div class="row">
                                    <div class="col-md-12">
                                        <form class="">
                                            <fieldset>

                                                 <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Employment</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                    <option selected="" disabled="" value="-1">--Select--</option>
                    <option value="1" class="notranslate">Employed for an indefinite period</option>
                    <option value="2" class="notranslate">Employed for a fixed term of contact</option>
                    <option value="3" class="notranslate">Temporarily employed</option>
                    <option value="4" class="notranslate">Entrepreneur/freelance</option>
                    <option value="5" class="notranslate">IV pensioner</option>
                    <option value="6" class="notranslate">AHV pensioner</option>
                    <option value="0" class="notranslate">Unemployed</option>
                    </select>
                                                    </div>
                                                </div>
                                     </div>

                                     
                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Monthly income</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input type="number" id="phone" name="phone"  placeholder="Monthly income" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Annual bonus</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input type="number" id="phone" name="phone"  placeholder="Monthly income" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                         

                                        

                                                <div class="row">

         <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Thirteenth salary</label>
                                                        </div>
                                                </div>
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio" checked> Yes </label>
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio"> No </label>
 </div>
                                                </div>

                                                
                                                <div class="row">

         <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Aditional income</label>
                                                        </div>
                                                </div>
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio" checked> Yes </label>
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio"> No </label>
 </div>
                                                </div>

                                                
                                                <div class="row">

         <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Unpaid bills</label>
                                                        </div>
                                                </div>
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio" checked> Yes </label>
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio"> No </label>
 </div>
                                                </div>
                                     


                                            </fieldset>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script>
   import {validationMixin} from 'vuelidate'
   import {required, email} from 'vuelidate/lib/validators'
 
    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    username: '',
                    demoEmail: '',
                    message: ''
                }
            }
        },
        validations: {
            form: {
                username: {
                    required
                },
                demoEmail: {
                    required,
                    email
                },
                message: {
                    required
                }
            }
        },
        watch: {
            $v: {
                handler: function (val) {
                    this.$emit('can-continue', {value: true});
                    // if(!val.$invalid) {
                    //     this.$emit('can-continue', {value: true});
                    // } else {
                    //     this.$emit('can-continue', {value: false});
                    // }
                },
                deep: true
            },
            clickedNext(val) {
                if(val === true) {
                    this.$v.form.$touch();
                }
            }
        },
        mounted() {
            this.$emit('can-continue', {value: true});
            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        }
    }
</script>

