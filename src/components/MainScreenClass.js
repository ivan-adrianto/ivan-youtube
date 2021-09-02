import axios from 'axios'
import React, { Component } from 'react';
import './MainScreen.css'

class MainScreenClass extends Component {
    state = {
        isLoading: false,
        keyword: '',
        data: null,
    }
    handleSearch = (e) => {
        this.setState({ isLoading: true })
        e.preventDefault()
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.keyword}&key=AIzaSyBgKe9EdXWbPDwwzfc0zxnnIMCMkS2WCuo`)
            .then(res => this.setState({ data: res.data.items }))
            .then(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Search Youtube Video Here!</h1>
                    <form onSubmit={this.handleSearch} >
                        <input className='form-control' type="text" onChange={(e) => this.setState({ keyword: e.target.value })} />
                        <button className='btn btn-primary' onClick={this.handleSearch}>Search</button>
                    </form>
                    {this.state.isLoading ? <h4>Loading...</h4> :
                        this.state.data !== null &&
                        <div>
                            <h2>Result: </h2>
                            {this.state.data.map(video => {
                                return (
                                    <ul key={video.id.videoId}>
                                        <li>
                                            <img src={video.snippet.thumbnails.medium.url} alt="thumbnails" /><br/>
                                            {video.snippet.title} <br />
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    }
                    { }
                </div>
            </div>
        );
    }
}

export default MainScreenClass;