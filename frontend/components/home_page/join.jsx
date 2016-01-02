var React = require("react");
var SessionActions = require("../../actions/session_actions");

var Join = React.createClass({
  signUp: function () {
    SessionActions.showSignUpModal();
  },

  render: function () {
    return (
      <section className="home-page-join">
        <div className="container">
          <h2 className="home-page-heading">
            All the music you'll ever need is right here
          </h2>

          <section className="join-message">
            <p>Connect with artists, and discover up-and-coming musicians.</p>

            <p>Explore, add, and save your favorite tunes.</p>
            <p>Create playlists to put the tracks on repeat later.</p>

            <br/>

            <p>Ready to chime in?</p>
          </section>

          <section className="join-button">
            <a className="join-button" onClick={ this.signUp }>
              SIGN UP FOR FREE
            </a>
          </section>
        </div>
      </section>
    );
  }
});

module.exports = Join;
