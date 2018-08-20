<template>
  <div class="bla">
     <div class="collapse searchbar" id="searchbar">
        <div class="search-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-btn">
            <button class="btn btn-default" type="button">Go!</button>
            </span> </div>
                      
                    </div>
                   
                </div>
            </div>
        </div>
    </div>


    <div class="top-bar">
        <!-- top-bar -->
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-6 d-none d-xl-block d-lg-block">
                    <p class="mail-text">Dobrodošli na našu internet prezentaciju</p>
                </div>
                <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 text-right">
                    <div class="top-nav"> <span class="top-text"><a href="#">Lokacije</a> </span> <span class="top-text"><a href="#">+1800-123-4567</a></span> <span class="top-text"><a href="#">Kreditni kalkulator</a></span> <router-link to="/login"><span class="top-text"><a href="#">Login</a></span></router-link> </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.top-bar -->
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-6 col-6">
                    <!-- logo -->
                    <div class="logo">
                        
                        <a href="index.html"><img src="../assets/images/logo.png" alt="Borrow - Loan Company Website Template"></a>
                    </div>
                </div>
                <!-- logo -->
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div id="navigation">
                        <!-- navigation start-->
                        <ul>
                            <li><router-link to="/" title="Početna" class="animsition-link">Početna</router-link></li>
                            <!-- <li><a href="index.html" title="Početna" class="animsition-link">Početna</a></li> -->
                            <li><a href="#" class="animsition-link">Krediti</a> 
                                <ul>
                                   
                                        <li><router-link to="/noviKredit" title="Početna" class="animsition-link">Novi kredit</router-link></li>
                                        <li><router-link to="/otkupKredita" title="Početna" class="animsition-link">Otkup starog kredita</router-link></li>
                                        <li><router-link to="/compareKredita" title="Početna" class="animsition-link">Poređenje kredita</router-link></li>
                                    <!-- <li><a href="car-loan.html" title="Car Loan" class="animsition-link">Kredit za automobil</a></li>
                                    <li><a href="personal-loan.html" title="Personal Loan" class="animsition-link">Krediti za obrazovanje</a></li>
                                    <li><a href="product-single-sidebar.html">Kredit za namještaj <span class="badge">Novo</span></a></li> -->
                                </ul>
                            </li>
                            <li><router-link to="/onama" class="animsition-link">O nama</router-link></li>
                            <li><router-link to="/kontakt" class="animsition-link">Kontakt</router-link></li>
                            <li><router-link to="/faq" class="animsition-link">FAQ</router-link></li>
                            <!-- <li><a href="faq.html" class="animsition-link">FAQ</a> </li> -->
                        </ul>
                    </div>
                    <!-- /.navigation start-->
                </div>
                <div class="col-xl-l col-lg-1 col-md-1 col-sm-1 col-12 d-none d-xl-block d-lg-block">
                    <!-- search start-->
                    <div class="search-nav"> <a class="search-btn" role="button" data-toggle="collapse" href="#searchbar" aria-expanded="false"><i class="fa fa-search"></i></a> </div>
                </div>
                <!-- /.search start-->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome from heder'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
