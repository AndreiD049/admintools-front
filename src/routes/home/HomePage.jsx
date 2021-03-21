import React, { Suspense, useState } from 'react';
import { Container } from 'react-grid-system';
import FlexLayout from 'flexlayout-react';
import '../../../node_modules/flexlayout-react/style/dark.css';
import { makeStyles } from '@fluentui/react';
import PageHeader from '../../components/shared/page-header';

const HomePlannedItems = React.lazy(() => import('../../components/widgets/home-planned-items'));

const useStyles = makeStyles(() => ({
  panel: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    border: '1px solid #555',
    boxSizing: 'border-box',
  },
}));

const json = {
  global: { tabEnableClose: false },
  borders: [
    {
      type: 'border',
      location: 'bottom',
      size: 100,
      children: [
        {
          type: 'tab',
          name: 'four',
          component: 'text',
        },
      ],
    },
    {
      type: 'border',
      location: 'left',
      size: 100,
      children: [],
    },
  ],
  layout: {
    type: 'row',
    weight: 100,
    children: [
      {
        type: 'tabset',
        weight: 50,
        selected: 0,
        children: [
          {
            type: 'tab',
            name: 'One',
            component: 'home',
          },
        ],
      },
      {
        type: 'tabset',
        weight: 50,
        selected: 0,
        children: [
          {
            type: 'tab',
            name: 'Two',
            component: 'text',
          },
          {
            type: 'tab',
            name: 'Three',
            component: 'text',
          },
        ],
      },
    ],
  },
};

const HomePage = () => {
  const classes = useStyles();
  const [model] = useState(FlexLayout.Model.fromJson(json));

  const factory = (node) => {
    const component = node.getComponent();
    if (component === 'text') {
      return (
        <div className={classes.panel}>
          Panel
          {node.getName()}
        </div>
      );
    }
    if (component === 'home') {
      return (
        <Suspense fallback={(<div>Loading...</div>)}>
          <HomePlannedItems />
        </Suspense>
      );
    }
    return null;
  };

  return (
    <>
      <PageHeader text="Home Page" />
      <Container
        fluid
        style={{
          height: '1000px',
          width: '100%',
        }}
      >
        <FlexLayout.Layout model={model} factory={factory} />
      </Container>
    </>
  );
};

export default HomePage;
