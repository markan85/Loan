<template>
<div class="container">
    <div class="offset-xl-1 col-xl-9 offset-lg-1 col-lg-9 col-md-12 col-sm-12 col-12">
        <br>
                    <div class="lead-calculator pinside40">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10">
                                <h2 class="text-white mb20">Get a Loan Today</h2>
                                <div class="slider">
                                    <h4 class="text-white">Loan Amount</h4>
                                    
                                    <range-slider class="slider" min="1000" max="120000" step="1000" v-model="iznosKredita" @change="racunaj"> </range-slider>

                                    <div>
                                        <h6 id="pricipal" class="text-white">{{iznosKredita}} CHF</h6>
                                    </div>
                                </div>
                                <div class="slider">
                                    <h4 class="text-white">Loan Months</h4>
                                  
                                  <range-slider class="slider" min="12" max="120" step="6" v-model="mjeseci" @change="racunaj"> </range-slider>

                                    <div>
                                        <h6 id="totalyear" class="text-white">{{mjeseci}} </h6>
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
                                <!-- <router-link to="/unosZahtjeva"><button  class="btn btn-default btn-sm">APPLY NOW</button></router-link> -->
                                 <div class="btn-action">  <router-link to="/unosZahtjeva"> <a href="#" class="btn btn-default">Apliciraj</a></router-link> </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
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
      rata : 0,
      kamata:8,
      ukupnoKamate: 0,
      ukupno: 0
    }
  },
  methods: {
       racunaj: function(){

       var monthlyInterestRatio = (this.kamata / 100) / 12;

        var top = Math.pow((1 + monthlyInterestRatio), this.mjeseci);
        var bottom = top - 1;
        var sp = top / bottom;
        this.rata = ((this.iznosKredita * monthlyInterestRatio) * sp).toFixed(2).toString();
        
        this.ukupno =  (this.rata * this.mjeseci).toFixed(2).toString();
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