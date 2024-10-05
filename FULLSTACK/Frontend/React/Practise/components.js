// Creating and nesting components 

function MyButton(){
    return (
        <button>
             Try Me 
        </button>
    );
}
export default function App() {
    return (
        <div>
            <h1>Hello User, Welcome to the website!</h1>
            <MyButton />
        </div>
    );
}