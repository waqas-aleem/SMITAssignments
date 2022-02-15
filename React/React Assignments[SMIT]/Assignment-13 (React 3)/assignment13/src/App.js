import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div className="container mainbackground navbarckground">
        <div className="row">
          <div className="col-lg-5 p-5">
            <h1 className="fst-italic">Title of a longer<br/> featured blog post</h1>
            <p>Multiple lines of text that form the lece informing new readers quickly and efficently about what's most interesting in this post's contents</p>
            <a href="#" className="text-white text-decoration-none"><b>Continue reading...</b></a>

          </div>

        </div>




      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-7 shadow   bg-body rounded">
                <div className="card border border-0">
                  <div className="card-body">
                  <a href="#" className="card-link  text-decoration-none fw-bolder">World</a>
                    <h3 className="card-title mt-3">Featured post</h3>
                    <h6 className="card-subtitle text-muted">Nov 12</h6>
                    <p className="card-text cardtext mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link text-decoration-none">Continue Reading...</a>

                  </div>
                </div>
              </div>
              <div className="col-lg-5 cardimage d-flex justify-content-center align-items-center">
              <h5 className="text-white fst-italic">Thumbnail</h5>
              </div>

            </div>

          </div>
         
          <div className="col-lg-5 ms-auto me-0">
            <div className="row ">
              <div className="col-lg-7 shadow   bg-body rounded">
                <div className="card border border-0">
                  <div className="card-body">
                  <a href="#" className="card-link  text-decoration-none fw-bolder text-success">Design</a>
                    <h3 className="card-title mt-3">Post title</h3>
                    <h6 className="card-subtitle text-muted">Nov 12</h6>
                    <p className="card-text cardtext mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link text-decoration-none">Continue Reading...</a>

                  </div>
                </div>
              </div>
              <div className="col-lg-5 cardimage d-flex justify-content-center align-items-center">
              <h5 className="text-white fst-italic">Thumbnail</h5>
              </div>

            </div>

          </div>
        </div>

      </div>

      <div className="container mt-5">

        <div className="row p-0">
          <div className="col-lg-9">
            <h1>From the Firehose</h1>
            <hr/>
            <h2 className="mt-3">Sample blog post</h2>
            
            <p className="text-secondary">January 1,2014 by <a href="" className="text-decoration-none">Mark</a></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled.  </p>

            <hr className="mt-5"/>

 
            <p>Lorem Ipsum is simply dummy text of the <a href="" className="card-link text-decoration-none">printing and typesetting</a> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

           <p className="mt-5">Lorem Ipsum is simply <b>dummy text of the printing and</b> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took.</p>

           <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took.</p>
           <h1 className="mt-5">Heading</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <h1>Sub-heading</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
           <p>Example code block</p>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

           <h1>Sub-heading</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
           <ul className="mt-3 mb-4">
             <li>Lorem Ipsum is simply dummy text of the printing</li>
             <li>Lorem Ipsum is simply dummy text of the printing</li>
             <li>Lorem Ipsum is simply dummy text of the printing</li>
           </ul>
           
            <p className="mt-3 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ol>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
            </ol>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

            <h1 className="mt-5">Another blog post</h1>
            <p className="text-secondary">December 14, 2013 by <a href="#" className="card-link text-decoration-none">Chris</a></p>
          </div>
          {/* Aside bar */}
          <div className="col-lg-3 ps-3 pe-0">
          <div className="abouttext py-4 px-3">
            <h4 className='fw-bolder fst-italic'>About</h4>
            <p className="abouttext2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>

            
          </div>
        </div>

        

        
      </div>

    </>
  );
}

export default App;
