import '../../dashboard/style/homepage.scss';

function renderHomePage() {
    var lendingPage = document.getElementById('lending-page');
    var homePage = document.getElementById('home-page');

    
    lendingPage.style.display = 'none';

    
    homePage.style.display = 'block';
  }

const  HomePage= () => {

    return (
      <>
     <div class="dashboard-wrapper" id="home-page">
<h2>ghfsyjsyh</h2>
     </div>
      </>
    );
  };
  
  export default HomePage;