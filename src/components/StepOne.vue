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

         <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Title</label>
                                                        </div>
                                                </div>
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio" checked>Mr</label>
           <label style="float:left" class="radio-inline"><input type="radio" name="optradio">Mrs</label>
 </div>
                                                </div>
                                                  <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">First name</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="Name" name="Name" type="text" placeholder="First name" class="form-control">
                                                    </div>
                                                </div>
                                                </div>
                                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Last name</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="EMAIL" name="EMAIL" type="text" placeholder="Last name" class="form-control">
                                                    </div>
                                                </div>
                                                </div>
                                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Street</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Street" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">No</label>
                                                        </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="No" class="form-control">
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Canton</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                        <option selected="" disabled="" value="0">-- Select --</option>
                        <option value="AG">AG</option><option value="AI">AI</option><option value="AR">AR</option><option value="BE">BE</option><option value="BL">BL</option><option value="BS">BS</option><option value="FL">FL</option><option value="FR">FR</option><option value="GE">GE</option><option value="GL">GL</option><option value="GR">GR</option><option value="JU">JU</option><option value="LU">LU</option><option value="NE">NE</option><option value="NW">NW</option><option value="OW">OW</option><option value="SG">SG</option><option value="SH">SH</option><option value="SO">SO</option><option value="SZ">SZ</option><option value="TG">TG</option><option value="TI">TI</option><option value="UR">UR</option><option value="VD">VD</option><option value="VS">VS</option><option value="ZG">ZG</option><option value="ZH">ZH</option>                    
                    </select>
                                                    </div>
                                                </div>
                                                     
                                                </div>

                                                  <div class="row">
                                                    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Since</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                     <option selected="" disabled="" value="0">--Select--</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                                            
                    </select>
                                                    </div>
                                                </div>
                                                      <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
           <option selected="" disabled="" value="0">--Select--</option>
                                                    <option>2018</option>
                                                        <option>2017</option>
                                                        <option>2016</option>
                                                        <option>2015</option>
                                                        <option>2014</option>
                                                        <option>2013</option>
                                                        <option>2012</option>
                                                        <option>2011</option>
                                                        <option>2010</option>
                                                        <option>2009</option>
                                                        <option>2008</option>
                                                        <option>2007</option>
                                                        <option>2006</option>
                                                        <option>2005</option>
                                                        <option>2004</option>
                                                        <option>2003</option>
                                                        <option>2002</option>
                                                        <option>2001</option>
                                                        <option>2000</option>
                                                        <option>1999</option>
                                                        <option>1998</option>
                                                        <option>1997</option>
                                                        <option>1996</option>
                                                        <option>1995</option>
                                                        <option>1994</option>
                                                        <option>1993</option>
                                                        <option>1992</option>
                                                        <option>1991</option>
                                                        <option>1990</option>
                                                        <option>1989</option>
                                                        <option>1988</option>
                                                        <option>1987</option>
                                                        <option>1986</option>
                                                        <option>1985</option>
                                                        <option>1984</option>
                                                        <option>1983</option>
                                                        <option>1982</option>
                                                        <option>1981</option>
                                                        <option>1980</option>
                                                        <option>1979</option>
                                                        <option>1978</option>
                                                        <option>1977</option>
                                                        <option>1976</option>
                                                        <option>1975</option>
                                                        <option>1974</option>
                                                        <option>1973</option>
                                                        <option>1972</option>
                                                        <option>1971</option>
                                                        <option>1970</option>
                                                        <option>1969</option>
                                                        <option>1968</option>
                    </select>
                                                    </div>
                                                </div>
                                                </div>

                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Phone (Home)</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Home" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                                     
                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Phone (Office)</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Office" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                                     
                                    <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Phone (Mobile)</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Mobile" class="form-control">
                                                    </div>
                                                </div>
                                     </div>
                                      <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Email</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Email" class="form-control">
                                                    </div>
                                                </div>
                                     </div>
                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Citizenship</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <input id="phone" name="phone" type="text" placeholder="Citizenship" class="form-control">
                                                    </div>
                                                </div>
                                     </div>

                                     <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Education</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                     <option selected="" disabled="" value="0">--Select--</option>
                        <option value="1" class="notranslate">Elementary school</option>
                        <option value="2" class="notranslate">Preparation for a three-year secondary school</option>
                        <option value="3" class="notranslate">Craft/Three-year secondary school</option>
                        <option value="4" class="notranslate">Secondary school with graduation / Secondary school with diploma</option>
                        <option value="5" class="notranslate">Multi-vocational and professional education / College</option>
                        <option value="6" class="notranslate">University studies and above</option>
                                            
                    </select>
                                                    </div>
                                                </div>
                                     </div>


                                         <div class="row">
                                                <!-- Text input-->
                                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 form-group ">     
                                                     <div class="">                                             
                                                        <label class="control-label" for="name">Marital status</label>
                                                        </div>
                                                </div>
                                                <!-- Text input-->
                                                 <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-group ">
                                                   
                                                    <div class="">
                                                        <select name="canton" id="canton" required="" class="form-control">
                                                                     <option selected="" disabled="" value="0">--Select--</option>
                        <option value="1" class="notranslate">Single</option>
                        <option value="2" class="notranslate">Married</option>
                        <option value="3" class="notranslate">Widow/er</option>
                        <option value="4" class="notranslate">Divorced</option>
                        <option value="5" class="notranslate">Legally separated</option>
                    </select>
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
