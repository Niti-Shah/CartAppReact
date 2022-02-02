import React from 'react';
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        };
    }
    render() { 
        return ( 
        <form 
        className='row mb-5'
        onSubmit={(e) => {
            e.preventDefault();
           this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }}
        > 
            <div className="form-group mt-3 col-4">
              <label htmlFor="inputName">
                  Name
              </label>
               <input 
               type="text" 
               className="form-control" 
               id="inputName" 
               aria-describedby="name" 
               placeholder="Enter Name" 
               name="productName"
               onChange={(e) => {
                   this.setState({productName: e.currentTarget.value});
                }}
                value={this.state.productName}
                />
            </div>
            <div className="form-group mt-3 col-4">
              <label htmlFor="inputPrice">
                  Price
             </label>
              <input 
              type="number" 
              className="form-control" 
              id="price" 
              placeholder="Price" 
              name="productPrice"
              onChange={(e) => {
                this.setState({productPrice: Number(e.currentTarget.value)});
              }} 
              value={this.state.productPrice}
              />
            </div>
            {/* not able to remove 0 from the price textarea */}
            <button 
            type="submit" 
            className="btn btn-primary col-4 mt-3" 
            >
                
                Add
            </button>
            
          </form>

        );
    }
}
 
export default AddItem;