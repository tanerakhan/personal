import React from 'react';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import Loadcomp from './Loadcomp'

class Data extends React.Component{
state= {
    users: [],
    loading: true
}
    componentDidMount (){
        setTimeout(() => {
            axios.get('https://api.github.com/users/tanerakhan')
            .then(users => users.data)
            .then(users => {
                this.setState({
                   users,
                   loading:false
                })
            })
        }, 3000)
    }
render(){
    const dataWrapper = "getData";
    const avatar = "avatar";
    const personInfo = "personInfo";
    const socialMedia = "socialMedia";
    const linkedinSocial = "https://www.linkedin.com/in/tanerakhan/";
        return(
            <div className={dataWrapper}>
                  {
                this.state.loading ? <Loadcomp/> : ''
            }
<div className={avatar}>
<img className="animated rubberBand delay-5s" src={this.state.users.avatar_url} alt=""/>
</div>
<div className={personInfo}>
<span>{this.state.users.name}</span>
<span>{this.state.users.bio}</span>
<span>{this.state.users.location}</span>
<span>{this.state.users.company}</span>
</div>
<div className={socialMedia}>
<SocialIcon url={linkedinSocial}/>
<SocialIcon url={this.state.users.html_url}/>
</div>
</div>
        )
    }
}

export default Data