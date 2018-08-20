<template>
<div>
       <div class="page-header">
        <div class="container">
            <div class="row">

                   <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="bg-white pinside30">
                        <div class="row">
                           <div class="col-xl-4 col-lg-4 col-md-9 col-sm-12 col-12">
                                <h1 class="page-title">Poređenje kredita</h1>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-3 col-sm-12 col-12">
                                <div class="row">
                                       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="btn-action">  <router-link to="/unosZahtjeva"> <a href="#" class="btn btn-default">Apliciraj</a></router-link> </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sub-nav" id="sub-nav">
                        <ul class="nav nav-justified">
                            <li class="nav-item">
                                <a href="contact-us.html" class="nav-link">Give me call back</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Emi Caculator</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="wrapper-content bg-white pinside40">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="bg-light pinside40 outline">
                                        <span>Loan Amount is </span>
                                        <strong>
                                            <span class="pull-right" id="la_value">{{iznosKredita}}</span></strong>
                                       
                                        <range-slider class="slider" min="1000" max="120000" step="1000" v-model="iznosKredita" @change="racunaj"> </range-slider>

                                        <hr>
                                        <span>No. of Month is <strong>
                                            <span class="pull-right"  id="nm_value">{{mjeseci}}</span> </strong>
                                        </span>
                                         <range-slider class="slider" min="6" max="120" step="6" v-model="mjeseci" @change="racunaj"> </range-slider>
                                        <hr>
                                        <span>Interest in% at third party <strong><span class="pull-right"  id="roi_value">{{kamata}}</span>
                                        </strong>
                                        </span>
                                          <range-slider class="slider" min="0" max="30" step="0.5" v-model="kamata" @input="racunaj"> </range-slider>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="bg-light pinside30 outline">
                                                Monthly EMI
                                                <h2 id='emi' class="pull-right">{{rataNasa}} CHF</h2>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="bg-light pinside30 outline">
                                                Monthly EMI at third party
                                                <h2 id='tbl_int' class="pull-right">{{rataNjihova}} CHF</h2>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="bg-light pinside30 outline"> Monthly Saving
                                                <h2 id='tbl_full' class="pull-right">{{mjesecnaRazlika}} CHF</h2></div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="bg-light pinside30 outline">
                                                Total Saving
                                                <h2 id='tbl_int_pge' class="pull-right">{{razlika}} CHF</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div id="loantable" class='table table-striped table-bordered loantable table-responsive'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                </div>
</template>


<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      iznosKredita: 50000,
      mjeseci :60,
      kamataNasa : 4.9,
      rataNasa : 0,
      rataNjihova : 0,
      kamata:10,
      ukupnoKamate: 0,
      ukupno: 0,
      razlika :0,
      mjesecnaRazlika :0
    }
  },
  methods: {
       racunaj: function(){

       var monthlyInterestRatio = (this.kamataNasa / 100) / 12;

        var top = Math.pow((1 + monthlyInterestRatio), this.mjeseci);
        var bottom = top - 1;
        var sp = top / bottom;
        this.rataNasa = ((this.iznosKredita * monthlyInterestRatio) * sp).toFixed(2).toString();
        
        this.ukupno =  (this.rataNasa * this.mjeseci).toFixed(2).toString();
        this.ukupnoKamate = (this.ukupno - this.iznosKredita).toFixed(2).toString();

       var monthlyInterestRatio1 = (this.kamata / 100) / 12;
       var top1 = Math.pow((1 + monthlyInterestRatio1), this.mjeseci);
       var bottom1 = top1 - 1;
       var sp1 = top1 / bottom1;
       this.rataNjihova = ((this.iznosKredita * monthlyInterestRatio1) * sp1).toFixed(2).toString();
       this.razlika = ((this.rataNjihova * this.mjeseci) - (this.rataNasa * this.mjeseci)).toFixed(2).toString();

       this.mjesecnaRazlika = (this.rataNjihova - this.rataNasa).toFixed(2).toString();
  }
  },
  mounted() {
            this.racunaj();
        },
  components: {
    RangeSlider
  }
}
</script>

<style>
 .slider { 
   width: 100%; 
   padding: 0px;

 } 
.range-slider-knob{
    background-color: #f51f8a 
}

.range-slider-rail {
    background-color: #dee7f2 ;
border: 1px solid #064489;
} 
.range-slider-fill{
    background-color: #61a6f2 ;
}
</style>