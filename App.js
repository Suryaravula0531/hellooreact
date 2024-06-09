// const heading=React.createElement("h1",{},"Hello world from Reactjs");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//NESTED KIND OF STRUCTURE
{/* <div id="parent" >
    <div id="child1">
        <h1>im h1 tag</h1>
        <h2>im h2 tag</h2>
    </div>
    <div id="child2">
        <h1>im h1 tag</h1>
        <h2>im h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag")
    ])

])






// const heading=React.createElement(
//     "h1",
//     {id:"heading",abc:"xyz",},
//      "Hello world from reactjs"
// );

//  {}-->this is the place where you'll give attributes to the tages

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// this render method is responsibler to takek this object(react.createElement) and convert it into heading tag and put it on the top