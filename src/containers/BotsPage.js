import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBot: ''
  };

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(API)
      .then(r => r.json())
      .then(botData => {
        this.setState({ bots: botData }, () => {
          console.log('Fetch was made, state was updated to: ', botData);
        });
      });
  };

  handleClick = bot => {
    console.log('Clicked on:', bot);
    this.setState({ selectedBot: bot });
  };

  selectedBot = () => this.state.bots.find(bot => bot.id === this.state.selectedBot);

  render() {
    const bots = this.state.bots;
    const handleClick = this.handleClick;
    const selectedBot = this.state.selectedBot;
    return (
      <div>
        <YourBotArmy bots={bots} selectedBot={selectedBot} />
        <BotCollection bots={bots} handleClick={handleClick} />
      </div>
    );
  }
}

export default BotsPage;
