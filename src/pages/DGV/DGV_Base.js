import React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * DGV_Base
 */
export class DGV_Base extends React.PureComponent {
  rendereComplete() {
    /**custom render complete function */
  }
  componentDidMount() {
    setTimeout(() => {
      this.rendereComplete();
    });
  }
}
