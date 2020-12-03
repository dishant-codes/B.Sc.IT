// import androidImg from ".../public/outputfiles/android.png";

const Android=()=>{
     return(<>
         <div className="main-container container">
            <div className="d-flex align-items-center">
                <img src="./outputfiles/android.png" className="rounded float-left" alt="android" height="200px"></img>&nbsp;&nbsp;&nbsp;<h1><b>Android <br/>software <br/>development</b></h1>
            </div>
            <p className="android-discrip"><b>Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible. </b><br/><br/>
            <b>Written in:</b> <a className="android-link" href="https://google.com/search?q=Java" style={{color:"black",textDecoration:"none"}} rel="noopener noreferrer">Java</a><br/>
            <b>Initial release:</b> October 2009; 11 years ago<br/>
            <b>Stable release:</b> September 2017; 3 years ago<br/>
            <b>Developer(s):</b> <a className="android-link" href="https://google.com/search?q=Google" style={{color:"black", textDecoration:"none"}} rel="noopener noreferrer">Google</a></p><br/>

            <div className="row gy-4">
            <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                <a href="https://developer.android.com/studio" rel="noopener noreferrer">
                    <img style={{marginBottom:"15px"}} src="https://developer.android.com/studio/images/studio-icon.svg" alt="android-studio" height="48px"/>
                </a>
                <h5 className="card-title"><b>Android Studio</b></h5>
                <p className="card-text"> <b> Android Studio provides the fastest tools for building apps on every type of Android device</b></p>
                <a href="https://developer.android.com/studio" rel="noopener noreferrer" className="btn btn-outline-dark">DOWNLOAD</a>
                </div>
            </div>
            </div>
            <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                <a href="https://developer.android.com/guide" rel="noopener noreferrer">
                    <img style={{marginBottom:"15px"}} src="https://developer.android.com/images/home/developer-guides-icon.svg" alt="android-studio" height="48px"/>
                </a>
                <h5 className="card-title"><b>Developer guides</b></h5>
                <p className="card-text"><b>Find training classes that describe how to accomplish a specific task with code samples you can re-use in your app</b></p>
                <a href="https://developer.android.com/guide" rel="noopener noreferrer" className="btn btn-outline-dark">LEARN MORE</a>
                </div>
            </div>
            </div>
            </div><br/>
      </div>
         <div className="container"></div>

         </>
     );
}

export default Android;