import React from 'react';
import { connect } from 'react-redux';

const Landing = props => <div>{props.searchTerm}</div>;

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Landing);
