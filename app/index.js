var USER_DATA ={
  name: "Brent Reno",
  userName:'brentReno',
  image: 'https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2015/10/12/6358028384975493121605799433_halloween-costumes-for-dogs-pictures-2.jpg'
};

var React = require('react');
var ReactDOM = require("react-dom");

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageURL} style={{height: 100, width:100}}/>
  }
});

var Link = React.createClass({
  changeURL: function(){
    window.location.replace(this.props.href);
  },
  render: function(){
    return(
      <span style ={{color: "blue", cursor: "pointer"}} onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return(
      <div>
        <Link href={"http://www.github.com/" + this.props.userName}>
        {this.props.userName}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
    render: function(){
      return(
        <div> {this.props.name}</div>
      )
    }
});

var Avatar = React.createClass({
  render: function(){
      return(
        <div>
          <ProfilePic imageURL={this.props.user.image} />
          <ProfileName name={this.props.user.name}/>
          <ProfileLink userName={this.props.user.userName}/>
        </div>
      )
  }
});

ReactDOM.render(
  //can pass in any sort of data [],{}, ""
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
