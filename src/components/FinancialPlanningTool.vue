<template>
  <div>
    <h1>Financial Planning Tool</h1>
    <form id="app" @submit="checkForm" novalidate="true">
  
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      
      <p>
        <label for="price">Total Price</label>
        <input type="number" name="price" id="price" v-model="price">
      </p>

      <p>
        <label for="payment">Down Payment</label>
        <input type="text" name="payment" id="payment" v-model="payment">
      </p>

      <p>
        <label for="cost">Closing Cost</label>
        <input type="number" name="cost" id="cost" v-model="cost">
      </p>

      <p>
        <label for="loan">Bank Loan</label>
        <input type="number" name="loan" id="loan" v-model="loan">
      </p>

      <p>
        <label for="loan">Years</label>
        <input type="number" name="year" id="year" v-model="year">
      </p>


      <p>
        <label for="income">Average Annual Income (Please estimate for a longer period, at least the next 5 years) </label>
        <input type="number" name="income" id="income" v-model="income">
      </p>

      <p>
        <label for="movie">Favorite Movie</label>
        <select name="movie" id="movie" v-model="movie">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit">  
      </p>


      <p>
        <h4> Money you need to cost per month : {{ this.pay_in_every_month}}  </h4>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FinancialPlanningTool',

  data(){
    return {
      errors:[],
      price : 0,
      cost : 0,
      loan : 0,
      interest : 0.08,
      income : 0,
      year : 0,
      pay_in_every_month: 0,
    }
  },
  methods: {
    calculateInterest() {
      var month = this.year * 12
      var base = (1 + this.interest, (-1) * month)
      this.pay_in_every_month = month * (this.loan) / (1 + base) + cost
    },
    checkForm:function(e) {
        this.errors = [];
        if(!this.price) this.errors.push("Price required.");
        if(!this.cost) {
          this.errors.push("Cost required.");
        } 
        if (!this.loan) {
          this.errors.push("loan required");
        }
        if (!this.year) {
          this.errors.push("Years required");
        }
        if (!this.loan) {
          this.errors.push("loan required");
        }
        if(!this.errors.length) return true;
        e.preventDefault();
      
      console.log(this.price, this.cost, this.loan, this.income)
      calculateInterest()



    }
  }
}
</script>