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
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Occupancy status</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                    <option selected="" disabled="" value="-1">--Select--</option>
                    <option value="1" class="notranslate">Living with Partner</option>
                    <option value="2" class="notranslate">Living alone</option>
                    <option value="3" class="notranslate">Live in Community</option>
                    <option value="4" class="notranslate">Living with parents</option>
                    <option value="5" class="notranslate">Single parent</option>
                    </select>
                                                    </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Residential status</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                      <option selected="" disabled="" value="0">--Select--</option>
                    <option value="1" class="notranslate">Rented apartment</option>
                    <option value="4" class="notranslate">Homeowner</option>
                    <option value="5" class="notranslate">Apartment employer</option>
                    </select>
                                                    </div>
                                                </div>
                                     </div>

                                     
                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Monthly rent</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input type="number" id="phone" name="phone"  placeholder="Monthly rent" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                                     <div class="row">

         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Are there children living in your household for whom you receive child support?</label>
                                                        </div>
                                                </div>
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio" checked> Yes </label>
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio"> No </label>
 </div>
                                                </div>


   <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">The reason for taking a loan</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                     <option selected="" disabled="" value="0">--Select--</option>
                    <option value="TAXES" class="notranslate">Tax</option>
                    <option value="SPORT" class="notranslate">Sports equipment, fitness equipment</option>
                    <option value="RECURING_BILLS" class="notranslate">Running cost</option>
                    <option value="JOINING_LOANS" class="notranslate">Debt Consolidation Loans</option>
                    <option value="CAR" class="notranslate">Car</option>
                    <option value="MOTORBIKE" class="notranslate">Motorcycle, scooter, roller</option>
                    <option value="FURNITURE" class="notranslate">House equipment, furniture</option>
                    <option value="EDUCATION" class="notranslate">Education, schooling</option>
                    <option value="ENTERTAINMENT_COMPUTERS" class="notranslate">E-entertainment devices, computers</option>
                    <option value="RENOVATION" class="notranslate">Renovation</option>
                    <option value="DOMESTIC_APPLIANCE" class="notranslate">Small home appliances</option>
                    <option value="HEALTH_BILLS" class="notranslate">Small home appliances</option>
                    <option value="CLOTHES_JEWELRY" class="notranslate">Clothes and jewellery</option>
                    <option value="HOLIDAYS" class="notranslate">Holiday (summer/winter)</option>
                    <option value="OTHER" class="notranslate">Other</option>
                    <option value="NO_COMMENT" class="notranslate">No comment</option>
                    </select>
                                                    </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Document 1</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                      <div class="form-control">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Document 2</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                      <div class="form-control">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Document 3</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                      <div class="form-control">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Document 4</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                      <div class="form-control">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
                                                </div>
                                     </div>



                                                <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Comment</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <textarea  rows="6" class="form-control"></textarea>
                                                    </div>
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

