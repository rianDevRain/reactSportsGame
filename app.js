/** @format */

class Team extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			shots: 0,
			score: 0,
		};

		this.shotSound = new Audio("media/audio/metalbat.wav");
		this.scoreSound = new Audio("media/audio/yell4yeeha.wav");
	}
	shotHandler = () => {
		let score = this.state.score;
		this.shotSound.play();

		if (Math.random() > 0.5) {
			score += 1;

			setTimeout(() => {
				this.scoreSound.play();
			}, 400);
		}
		this.setState((state, props) => ({
			shots: state.shots + 1,
			score,
		}));
	};

	render() {
		let shotPercentageDiv;

		if (this.state.shots) {
			const shotPercentage = Math.round((this.state.score / this.state.shots) * 100);
			shotPercentageDiv = (
				<div>
					<strong>Shooting %:</strong> {shotPercentage}
				</div>
			);
		}
		return (
			<div className="Team">
				<h2>{this.props.name} </h2>

				<div className="identity">
					<img src={this.props.logo} alt={this.props.name} />
				</div>

				<div>
					<strong>Shots:</strong> {this.state.shots}
				</div>

				<div>
					<strong>Score:</strong> {this.state.score}
				</div>
				<div>{shotPercentageDiv}</div>

				<button className="buttons" onClick={this.shotHandler}>
					Shoot!
				</button>
			</div>
		);
	}
}

function Game(props) {
	return (
		<div className="Game">
        <h1>Welcome to {props.venue}</h1>
        <div className="teamGames">
			<div className="teamOne">
				<Team name="Voodoo Boys" logo="media/images/pic1.jpg" />
			</div>
			<div className="teamTwo">
				<Team name="The Mox" logo="media/images/pic2.jpg" />
			</div>
            </div>
		</div>
	);
}

function App(props) {
	return <div className="App">
        <Game venue="Night City "/>
        <Game venue="The Badlands"/>
    </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
