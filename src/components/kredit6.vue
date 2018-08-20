<template>
<div>
  <div>
      <div class="lead-hero-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                    <!-- hero-caption -->
                    <div class="lead-hero-caption">
                        <h1 class="lead-hero-title">Lead Generation Page</h1>
                        <p>A personal loan Lead Generation Templates is a short to medium term unsecured loan (no collateral) that you can use to meet current financial needs. </p>
                        <p class="lead mb0 text-white">Apply For <strong class="text-white">$1000 to $120 000</strong></p>
                        <span>(Minimum loan amount $1000)</span>
                        <div class="rating-list">
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star-half"></i></span>
                            <span class="text-white">4.5 / 5 (15 Reviews)</span>
                        </div>
                    </div>
                    <!-- /.hero-caption -->
                </div>
                <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="lead-calculator pinside40">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10">
                                <h2 class="text-white mb20">Get a Loan Today</h2>
                                <div class="slider">
                                    <h4 class="text-white">Loan Amount</h4>
                                    
                                    <range-slider class="slider" min="1000" max="120000" step="1000" v-model="iznosKredita" @change="racunaj1"> </range-slider>

                                    <div>
                                        <h6 id="pricipal" class="text-white">{{iznosKredita}} CHF</h6>
                                    </div>
                                </div>
                                <div class="slider">
                                    <h4 class="text-white">Loan Months</h4>
                                  
                                  <range-slider class="slider" min="12" max="120" step="6" v-model="mjeseci2" @change="racunaj1"> </range-slider>

                                    <div>
                                        <h6 id="totalyear" class="text-white">{{mjeseci2}} </h6>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="single-total">
                                    <h5 class="lead-cal-small-text">Loan EMI</h5>
                                    <h4 class="text-white emi-price" id="emi">{{rata}}</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="single-total">
                                    <h5 class="lead-cal-small-text">Total Interest Payable</h5>
                                    <h4 class="text-white" id="tbl_emi">{{ukupnoKamate}}</h4>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div class="single-total">
                                    <h5 class="lead-cal-small-text">Total Payment (Pri + Int)</h5>
                                    <h4 class="text-white" id="tbl_la">{{ukupno}}</h4>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-right">
                                <!-- <button class="btn btn-default btn-sm">APPLY NOW</button> -->
                                <router-link to="/unosZahtjeva"><button  class="btn btn-default btn-sm">APPLY NOW</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    <div class="container">
    <!-- <div class="row">
        <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" >
             <steper></steper>
        </div>
    </div> -->

 <div class="bg-white section-space80">
        <div class="container">
            <div class="row">
                <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-12">
                    <div class="mb30 text-center section-title">
                        <!-- section title start-->
                        <h1>Why choose borrow loan</h1>
                    </div>
                    <!-- /.section title start-->
                </div>
            </div>
            <div class="row">
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>Direct Lender</h4>
                        <p>Sed ac turpu nisl cimcursus aeget nuusce vhicula sapien nun csit amet finibusas.</p>
                    </div>
                </div>
                <!-- /.features -->
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>Fast Online Application </h4>
                        <p>Cras viverra, ipsum sit amet hendrerit tempor, dolor eros fringilla nisi, at sagittis magna nibh et tortor. </p>
                    </div>
                </div>
                <!-- /.features -->
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>No Payout Fee</h4>
                        <p>Ut faucibus, mauris vel lobortis lobortis, dolor justo sagittis leo, vitae tempus eros metus sit amet libero. </p>
                    </div>
                </div>
                <!-- /.features -->
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>Multiple Repayment Options</h4>
                        <p>Donec vel nunc at odio sollicitudin efficitur. Vestibulum vel nisl non sem gravida aliquet. Etiam id aliquet enim.</p>
                    </div>
                </div>
                <!-- /.features -->
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>No Hidden Costs</h4>
                        <p>Aenean consectetur nunc eget augue sollicitudin euismod eu nec orci.</p>
                    </div>
                </div>
                <!-- /.features -->
                <!-- features -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
                    <div class="bg-white pinside30 mb30 highlight-outline outline">
                        <h4>Fully Authorised Authority</h4>
                        <p>Curabitur ornare, magna a scelerisque ullamcorper, est lorem porta nibm at diam sed feugiat.</p>
                    </div>
                </div>
                <!-- /.features -->
            </div>
        </div>
    </div>

    </div>
         <div class="section-space80 bg-light-blue how-it-section">
        <div class="container">
            <div class="row">
                <div class=" offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="section-title mb60 text-center">
                        <!-- section title start-->
                        <h1 class="text-white">Get refinanced in three easy steps</h1>
                        <p> A Clear and simple path to financial freedom. Consectetur, accumsan quam.</p>
                    </div>
                    <!-- /.section title start-->
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                    <div class="how-it-block">
                        <h3 class="how-it-no">1</h3>
                        <div class="how-it-content">
                            <h2 class="text-white">Get pre-approved</h2>
                            <p>Pellentesque hendrerit nibh aliquet interdum purus lacinia lectuurabitur in arcu nibh.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                    <div class="how-it-block">
                        <h3 class="how-it-no">2</h3>
                        <div class="how-it-content">
                            <h2 class="text-white">Select rate and term</h2>
                            <p>Nullam eget malesuada lectus. Quisque aliquam molestie enim, eget luct consectetur lobortis.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                    <div class="how-it-block">
                        <h3 class="how-it-no">3</h3>
                        <div class="how-it-content">
                            <h2 class="text-white">Verify and Get done</h2>
                            <p>Curabitur et magna nec sem imperdiet molestie. Nulla rhoncus venenatis augue.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-4 col-12 text-center mt30">
                    <a href="#" class="btn btn-default">get started</a>
                </div>
            </div>
        </div>
    </div>
      
      </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import steper from './steper'

export default {
  data () {
    return {
      iznosKredita: 50000,
      mjeseci2 :60,
      rata : 0,
      kamata:8,
      ukupnoKamate: 0,
      ukupno: 0
    }
  },
  methods: {
       racunaj1: function(){

       var monthlyInterestRatio = (this.kamata / 100) / 12;

        var top = Math.pow((1 + monthlyInterestRatio), this.mjeseci2);
        var bottom = top - 1;
        var sp = top / bottom;
        this.rata = ((this.iznosKredita * monthlyInterestRatio) * sp).toFixed(2).toString();
        
        this.ukupno =  (this.rata * this.mjeseci2).toFixed(2).toString();
        this.ukupnoKamate = (this.ukupno - this.iznosKredita).toFixed(2).toString();
  }
  },
//   computed: {
//     mjeseci: function () {
//         console.log('computed !');
//       var monthlyInterestRatio = (this.kamata / 100) / 12;

//         var top = Math.pow((1 + monthlyInterestRatio), this.mjeseci);
//         var bottom = top - 1;
//         var sp = top / bottom;
//         this.rata = ((this.iznosKredita * monthlyInterestRatio) * sp).toFixed(2).toString();
//     }
//   },
  components: {
    RangeSlider,steper
  },
  mounted() {
            this.racunaj1();
        },
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
 .range-slider-inner{
/*background-color: #61a6f2 ;
 border: 1px solid #064489; */
}

.range-slider-rail {
    background-color: #61a6f2 ;
border: 1px solid #064489;
} 
.range-slider-fill{
    background-color: #61a6f2 ;
}
</style>