var React    = require("react");
var List     = require("./List.jsx");

var ListManager = React.createClass({
    getInitialState : function(){
        return { items : [], newItemText : ''};
    },
    onChange : function(e){
        this.setState({newItemText : e.target.value});
    },
    handelSubmit : function (e) {
        e.preventDefault();
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items : currentItems, newItemText : ''});
    },
    render : function() {

        var headerStyle = {},
            boxStyle    = {},
            divStyle    = {
            marginTop : 10
        };

        if(this.props.headerColor) {
            headerStyle.background = this.props.headerColor;
            boxStyle.borderColor = this.props.headerColor;
        }

        return (
                <div style={divStyle} className="col-sm-4">
                    <div style={boxStyle} className="panel panel-primary">
                        <div style={headerStyle} className="panel-heading">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="row panel-body">
                            <form onSubmit={this.handelSubmit}>
                                <div className="col-sm-9">
                                    <input className="form-control" onChange={this.onChange} value={this.state.newItemText}></input>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                        <List items={this.state.items} />
                    </div>
                </div>
            );
    }
});

module.exports = ListManager;
