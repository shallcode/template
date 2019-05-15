import * as React from 'react';

import { connect } from 'react-redux';
import { Toolbar, Button, Grid, Cell, Drawer, NavigationDrawer, DialogContainer, ListItem, FontIcon } from 'react-md';
import { IAppState } from '../_helpers/store';
import { DrawerThunkDispatch, toggleDrawer } from '../_actions/DrawerActions';
import { IDrawerState } from '../_reducers/DrawerReducer';
import FileImportButton from '../_components/FileImportButton';
import SvgView from '../_components/SvgView';

interface NavLinkProps {
    label: string;
    to: string;
    icon: string;
}

const NavLink = (props: NavLinkProps) => (<ListItem
    active={true}
    rightIcon={<FontIcon>{props.icon}</FontIcon>}
    key={props.label}
    primaryText={props.label}
/>);


const navItems = [{
    label: 'Home',
    to: '/',
    icon: 'home',
}, {
    label: 'Shops',
    to: '/page-1',
    icon: 'business',
}, {
    label: 'Quality Control',
    to: '/page-2',
    icon: 'verified_user',
}, {
    label: 'Parts',
    to: '/page-3',
    icon: 'brightness_low',
}].map((props) => { return (<NavLink icon={props.icon} label={props.label} to={props.to} key={props.label} />) });

interface AppProps extends IDrawerState {
    handleDrawerToggle: () => Promise<any>;
}

class AppReactMd extends React.Component<AppProps> {
    ref = React.createRef();
    render() {
        const { drawerVisible, handleDrawerToggle } = this.props;
        return (
            <>
                <Toolbar
                    id="fixed-toolbar-example"
                    fixed
                    colored
                    nav={(
                        <Button key="nav" icon onClick={handleDrawerToggle}>menu</Button>
                    )}
                    actions={(
                        <Button key="action" icon >search</Button>
                    )}
                    title="Easy QC"
                />

                <Drawer
                    id="simple-drawer-example"
                    className="md-toolbar-relative"
                    visible={drawerVisible}
                    onVisibilityChange={(visible) => { console.log(visible); }}
                    onMediaTypeChange={(type) => { console.log(type); }}
                    position='left'
                    navItems={navItems}
                >
                </Drawer>
                <Grid className={drawerVisible ? 'md-toolbar-relative qc-pusher' : 'md-toolbar-relative qc-pusher transition'}>
                    <Cell size={2}><FileImportButton/></Cell>
                    <Cell size={8}><SvgView/></Cell>
                        
                        
                </Grid>



            </>
        );
    }

};

const mapStateToProps = (state: IAppState) => state.drawer;

const mapDispatchToProps = (dispatch: DrawerThunkDispatch) => ({
    handleDrawerToggle: () => dispatch(toggleDrawer()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppReactMd);