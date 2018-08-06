import React from 'react';
import { connect } from 'react-redux';
const AccountPage = () => {
  return (
    <div>
      <h1>Account Page</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(mapStateToProps)(AccountPage);
