import React from 'react';
import ReactDOM from 'react-dom';
import quotes from './quotes';
import './styles.css'

const backgroundColors = ['#ef4135','#1975d1','#ff00ff','#05a167','#6418b5','#e3d229','#e39444'];	

class App extends React.Component {
	state = { 
		quote: quotes[0].quote,
		author: quotes[0].author
	}

	quoteGenerator = () => {
		const selectQuote = quotes[Math.floor(Math.random()*quotes.length)];
		document.body.style.backgroundColor = backgroundColors[Math.floor((Math.random()*backgroundColors.length))];
		this.setState(
			{ quote: selectQuote.quote,
				author: selectQuote.author
			}
		)
	}

	render() {
		return (
			<div>
				<div className='quote'>
					<q>{this.state.quote}</q>
					<div className='author'>
						<h5>{this.state.author}</h5>
					</div>
				</div>
				<div className='generate'>
					<button onClick={this.quoteGenerator}>Get New Quote</button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));




