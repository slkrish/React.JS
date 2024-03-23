


export default function Example({handleChangeProp, inputValueProp}) {

   
    return(
        <div>
            <p><label>To Do List</label></p>
            <input onChange={handleChangeProp} type="text" value={inputValueProp} />
            <button>Save</button>
        </div>
    );

}

// event handlers:

// input = onchange ; onchange will give us an object. That object contains user input value
// button = onClick