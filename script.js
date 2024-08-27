html{
    box-sizing: border-box;
    height: 100%;
}

*,
*::before
*::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body{
    align-items: center;
    background: linear-gradient(320deg, #0d0ab8, #069c40, rgb(226, 194, 11));
    display: flex;
    font-family: 'Dosis', sans-serif;
    font-display: swap;
    height: inherit;
    justify-content: center;
} 

.wrapper{
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgb(35, 35, 35, 0.1);
    color: #232323;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(225, 225, 225, 0.30);
    border: 1px solid rgba(225, 225, 225, 0.34);
    flex-basis: 400px;
    height: 540px;
    padding: 20px 35px;
}

.screen{
    backdrop-filter: blue(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
    color: #232323;
    font-size: 35px;
    overflow: auto;
    padding: 20px;
    text-align: right;
    width: 326px;
}

.calc-button-row{
    display: flex;
    justify-content: space-between;
    margin: 5%;
}

.calc-button{
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(225, 225, 225, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
    color: #232323;
    flex-basis: 20%;
    font-family: inherit;
    font-size: 26px;
    height: 65px;
}

.calc-button:last-child{
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(225, 225, 225, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
    color: #fff;
    background: #d72880;
}

.calc-button:last-child:hover{
    background-color: inherit;
}
.calc-button:active{
    background-color: #ffef78;
}

.double{
    flex-basis: 47%;
}

.triple{
    flex-basis: 73%;
}
