import * as React from 'react';

// Connects our app to the store/dispatch
import { connect } from 'react-redux';
// UI Framework components
import { Toolbar, Button, Grid, Drawer, ListItem, FontIcon } from 'react-md';
// Our universal App state (this component is a 'container' component and therefore knows all about the store)
import { IAppState } from '../_helpers/store';
// Drawer action creators and a Thunk dispatch for linking props to dispatch
import { DrawerThunkDispatch, toggleDrawer, loadDrawerNavItems } from '../_actions/DrawerActions';
// Essential typings/interfaces to define what part of the state this component cares about
import { IDrawerState, IDrawerNavItem } from '../_reducers/DrawerReducer';

// Nav link generator using the DrawerNavItem interface 
// Used for generating Navigation Links in the Drawer (Sidebar) from data stored in the "store" or app state
export const NavLink = (props: IDrawerNavItem) => (<ListItem
    active={true}
    rightIcon={<FontIcon>{props.icon}</FontIcon>}
    key={props.label}
    primaryText={props.label}
/>);

// This particular apps props, extending the drawer state because this component needs to know about the Drawer state (whether its open/closed, what nav links exist, etc)
interface AppProps extends IDrawerState {
    handleDrawerToggle: () => Promise<any>;
    loadNavLinks: () => Promise<any>;
}

// AppShell now knows about everything in AppProps
class AppShell extends React.Component<AppProps> {

    // navlink generation function, could be extracted into a utility function
    private createNavLinks(navItems: IDrawerNavItem[]) : JSX.Element[] {
        let navLinks =  navItems.map((props) => { return (<NavLink icon={props.icon} label={props.label} to={props.to} key={props.label} />) });
        return navLinks;
    }

    // If the component has mounted, load in the actual nav links for the user.
    // This fires off a dispatch to the store with an action creator, the reducer calls the API and gets the users appropriate nav items
    componentDidMount() {
        const {loadNavLinks} = this.props;
        loadNavLinks();
    }

    render() {
        // These const {} declarations essentially only make props available to the function what is necessary. The props are created in the constructor. 
        const { drawerVisible, handleDrawerToggle, navItems } = this.props;
        return (
            <div className='app-shell'>
                <Toolbar
                    zDepth={1} // Makes the component have a neat shadow effect
                    fixed // Toolbar is fixed to the top
                    colored // Toolbar uses the UI Framework color theme
                    nav={( // This is the Menu button on the far left of the upper toolbar that toggles the sidebar/drawer. 
                        <Button key="nav" icon onClick={handleDrawerToggle}>menu</Button>
                    )}
                    actions={( // Not relevant yet. 
                        <Button key="action" icon >search</Button>
                    )}
                    title="Title" // Obvious
                />

                <Drawer
                    className="md-toolbar-relative dark-theme" // Styling bullshit
                    zDepth={1} // Another cool shadowy styling thing
                    visible={drawerVisible} // Sets the visible property to the drawerVisible prop in the component state, which is mapped to the store state later
                    onVisibilityChange={(visible) => { console.log(visible); }} // Doesnt actually work....trying to debug this
                    onMediaTypeChange={(type) => { console.log(type); }} // Media type is like desktop || tablet || phone etc
                    position='left' // Sidebar goes on the left
                    navItems={this.createNavLinks(navItems)} // generate nav links based off the store/states navItems
                >
                </Drawer>
                <Grid 
                    className={drawerVisible ? 'md-toolbar-relative app-shell-pusher' : 'md-toolbar-relative app-shell-pusher transition'} // Styling shit for the pusher effect
                >
                    {/* Where actual content goes, like buttons and SVG loaders etc */}
                </Grid>
            </div>
        );
    }


};

const mapStateToProps = (state: IAppState) => state.drawer; // Map the app state to the component props, but only give us access to the drawer state 

// Using the DrawerThunkDispatch, map the component (AppShell) functions to lambdas that call dispatches to the store, passing in action creators
const mapDispatchToProps = (dispatch: DrawerThunkDispatch) => ({
    handleDrawerToggle: () => dispatch(toggleDrawer()),
    loadNavLinks: () => dispatch(loadDrawerNavItems())
});

// Actually connect the mappings to the component, and export the final component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppShell);