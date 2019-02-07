import React from 'react'
import './home.css'

const Home = props => {
	// if (props.user) {
		return (
			<div className="Home">
				{/* <p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code> */}
				<img id="back" src={require('../../images/eugen-str-1111435-unsplash.jpg')} alt="tools" />
				{/* <img id="back" src={require('../../images/wiggle_full@2x.png')} alt="tools" /> */}
			</div>
		)
	// } else {
	// 	return (
	// 		<div className="Home">
	// 			{/* <p>Current User:</p>
	// 			<code>
	// 				{JSON.stringify(props)}
	// 			</code> */}
	// 			<img id="back" src={require('../../images/eugen-str-1111435-unsplash.jpg')} alt="tools" />
	// 			{/* <img id="back" src={require('../../images/wiggle_full@2x.png')} alt="tools" /> */}
	// 		</div>
	// 	)
	// }
}

export default Home