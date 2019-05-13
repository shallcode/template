import * as React from 'react';

import { connect } from 'react-redux';
import SelectedColor from '../_components/SelectedColor';
import ColorButton from '../_components/ColorButton';
import ColorList from '../_components/ColorList';
import SvgView from '../_components/SvgView';
import { Menu, Icon, Header, Grid, Segment } from 'semantic-ui-react';
import FileImportButton from '../_components/FileImportButton';



const App: React.SFC<{}> = () => {
  return (
    <>
      <Menu fixed="top">
        <Menu.Item>
          <Icon name="braille"></Icon>
        </Menu.Item>
        <Menu.Item>
          <Header>Easy QC</Header>
        </Menu.Item>
      </Menu>
      <Grid centered className="qc-app-content">
        <Grid.Column width={1}>
          <Menu vertical icon >
            <Menu.Item >
              <Icon name="upload"></Icon>

            </Menu.Item>
            <Menu.Item>
              <Icon name="edit"></Icon>
            </Menu.Item>
            <Menu.Item>
              <Icon name="tasks"></Icon>
            </Menu.Item>
            <Menu.Item>
              <Icon name="save"></Icon>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={12} className="qc-part-view">
          <Segment>
            <FileImportButton />
            <SvgView/>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default connect()(App);