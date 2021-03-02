// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

// const styles = (theme) => ({
//   page: {
//     padding: theme.spacing.unit * 3,
//     overflowY: "scroll",
//     WebkitOverflowScrolling: "touch",
//     height: `calc(100vh - 56px)`,
//     [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
//       height: `calc(100vh - 48px)`,
//     },
//     [theme.breakpoints.up("sm")]: {
//       height: `calc(100vh - 64px)`,
//     },
//   },
// });

// class PageContent extends React.Component {
//   state = { isScrolled: false };

//   componentDidMount() {
//     const page = document.getElementById("page");
//     page.addEventListener("scroll", this.handleScroll, { passive: true });
//   }
//   componentWillUnmount() {
//     const page = document.getElementById("page");
//     page.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     const page = document.getElementById("page");
//     // Only execute when the elevation should change
//     const isScrolled = page.scrollTop > 0;
//     if (isScrolled !== this.state.isScrolled) {
//       const appBar = document.getElementById("app-bar");
//       if (page.scrollTop <= 0) {
//         appBar.classList.add("not-scrolled");
//       } else {
//         appBar.classList.remove("not-scrolled");
//       }
//       this.setState({
//         isScrolled: !this.state.isScrolled,
//       });
//     }
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div id="page" className={classes.page}>
//         <Typography variant="subheading">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
//           lobortis velit. Curabitur leo tortor, suscipit eget ornare vitae,
//           ultricies sit amet sapien. Sed malesuada ultrices auctor. Morbi sed
//           ante non ligula feugiat posuere. Quisque urna ex, porttitor vitae
//           venenatis id, convallis ac sem. Mauris ullamcorper consequat congue.
//           Vestibulum id ex eget velit vestibulum gravida non ac nibh.
//           Pellentesque condimentum elit luctus, laoreet mauris a, gravida enim.
//           Ut venenatis tortor non ipsum eleifend molestie. Ut consectetur, nunc
//           et lobortis imperdiet, nisl nulla laoreet purus, id convallis mi metus
//           ut turpis. Nulla justo velit, eleifend eget aliquam sed, vehicula eu
//           metus.
//         </Typography>
//         <Typography variant="subheading">
//           Maecenas libero sapien, posuere eu ipsum at, hendrerit pellentesque
//           quam. Fusce vehicula sed sapien vitae finibus. Aliquam quis risus
//           mattis, malesuada ex faucibus, volutpat felis. Pellentesque commodo
//           maximus odio, non imperdiet velit fringilla et. Nullam ornare rhoncus
//           aliquam. Suspendisse eu tincidunt sapien, quis tincidunt nisi. Aenean
//           elementum nibh molestie tristique ultrices.
//         </Typography>
//         <Typography variant="subheading">
//           Mauris ac quam tortor. Nam vel auctor risus. Vestibulum porttitor leo
//           convallis gravida elementum. Maecenas sed nibh ante. Sed tortor enim,
//           mattis sit amet risus vitae, ullamcorper accumsan nisi. Donec id
//           maximus est. Aenean ut justo ac enim cursus scelerisque. Suspendisse
//           hendrerit risus in elit vehicula, ut lacinia mauris lacinia.
//           Vestibulum ultricies rhoncus ex, vel elementum ligula efficitur sed.
//           Proin pellentesque turpis ac ante rhoncus fermentum. Nullam fringilla
//           leo et facilisis tincidunt. Sed euismod eros massa, ut aliquam arcu
//           pulvinar non. Proin pharetra metus purus, sed tristique sem dictum sit
//           amet. Suspendisse eu vehicula lacus. Aenean id pretium lacus, ac
//           feugiat nisl. Cras ex velit, maximus vitae faucibus non, placerat ac
//           justo.
//         </Typography>
//         <Typography variant="subheading">
//           Aenean sapien ante, dapibus ut enim eget, luctus efficitur nibh.
//           Pellentesque eleifend nec lectus a condimentum. Sed tempor nunc
//           iaculis facilisis feugiat. Vivamus interdum magna ut placerat semper.
//           Etiam ut quam ac sapien blandit ornare. Duis mollis urna a diam
//           vestibulum fermentum. Proin tempor turpis elit, sed eleifend velit
//           blandit at. Donec nec mauris quis massa aliquam viverra. Aliquam eu
//           porttitor magna. Proin finibus, felis nec accumsan auctor, tellus arcu
//           molestie tortor, id lobortis mauris dolor finibus libero.
//         </Typography>
//         <Typography variant="subheading">
//           Cras condimentum dolor diam, sit amet feugiat mauris auctor vel.
//           Phasellus eget sagittis velit. Suspendisse et lacinia libero. Nullam
//           consectetur tellus in risus feugiat maximus. Nulla a ligula aliquet,
//           finibus felis in, cursus neque. Suspendisse ut ullamcorper diam, in
//           auctor ante. Etiam suscipit, odio id imperdiet volutpat, tellus est
//           dapibus magna, quis suscipit nibh quam in nibh. Duis eleifend massa ut
//           dolor elementum, id vulputate lorem euismod. Nam ac pharetra leo, sit
//           amet ultrices quam. Etiam vulputate ut felis ut tempor. Etiam pharetra
//           erat finibus mauris ullamcorper mattis. Donec a urna tempus, aliquet
//           ex et, auctor nisi. Suspendisse et tortor efficitur, varius mi eu,
//           porta sem. Etiam eu sagittis lectus. Sed efficitur vulputate enim vel
//           cursus.
//         </Typography>
//         <Typography variant="subheading">
//           In accumsan tempus dignissim. Quisque sit amet eros sem. Morbi mauris
//           tellus, condimentum at fermentum ac, ornare ac nulla. Sed vel
//           pellentesque est, et ullamcorper metus. Sed ut ligula eros. Vivamus a
//           dignissim mi, sed pretium risus. Maecenas ullamcorper dapibus
//           imperdiet. Orci varius natoque penatibus et magnis dis parturient
//           montes, nascetur ridiculus mus. Cras sem justo, aliquam sed lacus sit
//           amet, mattis lacinia urna. Mauris tempor dignissim est, id fringilla
//           turpis interdum in. Phasellus lobortis risus id risus malesuada, vel
//           volutpat ante posuere. Duis egestas ut nibh sed fermentum. Suspendisse
//           potenti.
//         </Typography>
//         <Typography variant="subheading">
//           Suspendisse sit amet nibh leo. Fusce nec porttitor neque. Maecenas
//           varius sapien mauris, id mollis felis vehicula eu. Nulla tempor
//           efficitur lacinia. Interdum et malesuada fames ac ante ipsum primis in
//           faucibus. Proin ac volutpat nibh. Duis vel aliquet augue. Fusce eget
//           lacinia ligula. Nullam efficitur nulla et elit malesuada finibus.
//           Integer consectetur lacus sed ante bibendum imperdiet. Nulla facilisi.
//           Cras lobortis dapibus elit, sed aliquet lectus consequat ut.
//           Vestibulum ullamcorper libero non dui fringilla, ut lobortis purus
//           lacinia. Pellentesque habitant morbi tristique senectus et netus et
//           malesuada fames ac turpis egestas.
//         </Typography>
//         <Typography variant="subheading">
//           Duis aliquet ipsum nec justo bibendum, in euismod dolor pulvinar.
//           Vivamus et sapien nec tortor pellentesque blandit eu vel purus.
//           Vivamus sollicitudin dui in mauris cursus congue. Sed lacinia orci at
//           diam ultricies, in pretium orci faucibus. Quisque finibus viverra
//           risus nec gravida. Sed mauris metus, interdum at ante non, vehicula
//           maximus nunc. Praesent a euismod arcu. Mauris nulla risus, tristique a
//           purus sit amet, placerat placerat lorem. Nunc pharetra non sapien id
//           malesuada. Nullam nisl libero, vestibulum ut venenatis at, accumsan
//           vitae arcu. Nulla sit amet lacinia est, at pulvinar tortor. Sed ac
//           tortor at nisi finibus ornare nec id nisl. Cras mollis ac elit ac
//           vulputate. Morbi dui odio, imperdiet sed diam nec, eleifend malesuada
//           libero. Donec id tortor ac nunc iaculis ultrices ut non nunc. Etiam
//           molestie libero eget auctor luctus.
//         </Typography>
//         <Typography variant="subheading">
//           Quisque quam nisl, efficitur eget accumsan quis, interdum sit amet
//           neque. Morbi non felis posuere, fermentum tortor et, pretium diam.
//           Aenean non nulla vitae libero tempor faucibus id ut magna. In
//           consequat diam vel ex rhoncus volutpat. Ut rhoncus ultrices arcu
//           mattis sollicitudin. In at quam non diam imperdiet ultricies.
//           Suspendisse vel orci interdum turpis mollis maximus vel ac libero.
//           Vestibulum egestas lectus non ligula malesuada consectetur. Vestibulum
//           imperdiet, nisl ut cursus accumsan, velit lectus feugiat risus, ac
//           rutrum nisi justo non turpis. Quisque facilisis dignissim enim eget
//           lacinia. Etiam iaculis mi id lorem lacinia, ac pretium quam volutpat.
//           Phasellus ut enim ac dui fermentum vehicula. In elit justo, dictum id
//           sapien sit amet, viverra tincidunt diam. Etiam tempor ultricies
//           egestas.
//         </Typography>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(PageContent);
