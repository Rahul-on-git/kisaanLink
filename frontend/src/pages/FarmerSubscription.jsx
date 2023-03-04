function FarmerSubscription() {
    return (
        <>
        <h1>Choose a Subscription Plan</h1>
    <div class="container">
      <div class="plan">
        <h2>Basic Plan</h2>
        <ul>
          <li>Basic Services</li>
          <li>7-days Trial to Standard Plan</li>
          <li>Limited to 1 account </li>
          <li id="price-1"> Rs-99 </li>
        </ul>
        <button>Subscribe Now</button>
      </div>
      <div class="plan">
        <h2>Standard Plan</h2>
        <ul>
          <li>Priority in Combos</li>
          <li>1 Month pack</li>
          <li>3 user accounts</li>
          <li id="price-2"> Rs-499 </li>
        </ul>
        <button>Subscribe Now</button>
      </div>
      <div class="plan">
        <h2>Premium Plan</h2>
        <ul>
          <li>Priority in Pooling  </li>
          <li>Half Yearly plan</li>
          <li>5 user accounts</li>
          <li id="price-3"> Rs-999 </li>
        </ul>
        <button>Subscribe Now</button>
      </div>
    </div>
        </>
    );
}

export default FarmerSubscription