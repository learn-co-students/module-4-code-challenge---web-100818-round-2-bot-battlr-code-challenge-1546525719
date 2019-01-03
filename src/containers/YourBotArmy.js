import React from 'react';
import BotCard from '../components/BotCard';

class YourBotArmy extends React.Component {
  render() {
    console.log('The selected bot is:', this.props.selectedBot);
    const selectedBot = this.props.selectedBot;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">Your Bot Army</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
