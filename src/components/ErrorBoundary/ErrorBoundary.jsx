import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorInfo: {},
  };

  componentDidCatch(error) {
    this.setState({
      errorInfo: error,
    });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError, errorInfo } = this.state;

    return !hasError ? (
      children
    ) : (
      <Box component="div">
        <Box component="p">{errorInfo.name || 'Error:'}</Box>
        <Box component="p">{errorInfo.message || 'Something went wrong :('}</Box>
      </Box>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
