import React from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends React.Component {
  render() {
    const bots = this.props.bots;
    const handleClick = this.props.handleClick;
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => {
            return <BotCard key={bot.id} bot={bot} handleClick={handleClick} />;
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
