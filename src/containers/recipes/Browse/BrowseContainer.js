/**
 * Recipe Tabs Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// The component we're mapping to
import RecipeTabsRender from './BrowseView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  meals: state.recipe.meals || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTabsRender);
