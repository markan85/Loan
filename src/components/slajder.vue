<template>
 <div>
      <carousel :per-page="1" :autoplayLoop="true" :autoplay="true" :loop="true" :autoplayTimeout="3000"
       :autoplayHoverPause="true"  paginationColor="#15549a"  paginationActiveColor="#f51f8a" :speed=1000 :mouse-drag=true>
         <slide>
      <div class="slider-img"><img src="../assets/images/slider-1.jpg" alt="Borrow - Loan Company Website Template" class="">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="slider-captions">
                            <!-- slider-captions -->
                            <h1 class="slider-title">Lični krediti samo za vas. </h1>
                            <p class="slider-text d-none d-xl-block d-lg-block d-sm-block">The low rate you need for the need you want! Call
                                <br>
                                <strong class="text-highlight">(555) 123-4567</strong></p>
                            <a href="team.html" class="btn btn-default">Loan Products</a> </div>
                        <!-- /.slider-captions -->
                    </div>
                </div>
            </div>
        </div>
  </slide>
  <slide>
    <div class="slider-img"><img src="../assets/images/slider-2.jpg" alt="Borrow - Loan Company Website Template" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="slider-captions">
                                <!-- slider-captions -->
                                <h1 class="slider-title">Zatvaranje postojećeg kredita <strong class="text-highlight">9.60%</strong> </h1>
                                <p class="slider-text d-none d-xl-block d-lg-block d-sm-block"> We provide an excellent service Loan company. Lorem ipsum simple dummy content goes here.</p>
                                <a href="#" class="btn btn-default">Check Eligiblity</a> </div>
                            <!-- /.slider-captions -->
                        </div>
                    </div>
                </div>
            </div>
  </slide>
  <slide>
      <div class="slider-img"><img src="../assets/images/slider-3.jpg" alt="Borrow - Loan Company Website Template" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="slider-captions">
                                <!-- slider-captions -->
                                <h1 class="slider-title">Poređenje sa ostalim bankama <strong class="text-highlight">11.10%</strong></h1>
                                <p class="slider-text d-none d-xl-block d-lg-block d-sm-block">We provide an excellent service for all types of loans in
                                    <br> ahmedabad and offer service, advice and direction.</p>
                                <a href="#" class="btn btn-default ">View Products</a> </div>
                            <!-- /.slider-captions -->
                        </div>
                    </div>
                </div>
            </div>
      </slide>
    </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'slajder',Carousel, Slide,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
