<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tanka' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'W9PIGyzboZl%+Fg$?S1_`U[V>Rr0zvwK~=6MPy=Bz%..g^0f82e^x<r>OtUfgW<!' );
define( 'SECURE_AUTH_KEY',  'AVDIMf`5i*$y4*rQeOh^B^,H$.{=9PJ}3cyh!`/elRV#ITDHU%7Y?UG!|:3rZ=5>' );
define( 'LOGGED_IN_KEY',    'HK+!;C>+DIjlz]_>?YA?Yiu4d%Um9S`LV.e81ROS-%muf.[nh%T{Quvv+s:DpjPr' );
define( 'NONCE_KEY',        '3^))c~jPwZ$uEl<|?Ht5+aaW_NS;?~79EqQm8/[kW$7y?r95Ts*mqQ{E_L_Fj3nD' );
define( 'AUTH_SALT',        '8sij_~&HeE}dxVxBbxyr:Dz!XB+e21MST^0}eTe&GDqoq+xii>KWyJK+f@NsW!Ov' );
define( 'SECURE_AUTH_SALT', 'eHd;iu2+1JtAH!a6%mw[3<B>[_OV?{:2T*l!bc>@*a/F>)lDgqs8D5gRgaLvM,%V' );
define( 'LOGGED_IN_SALT',   '|_1`g80cD5`<)Qmd^nxCr-qg?5l|/.w=15/>!~=WA(}>HjO;|upS}23MJw:FC/Z!' );
define( 'NONCE_SALT',       'VU:u>{EQHib#OS_xV-}R{Tr-wX-#k}h?3aH,omO9N)B_SQ*jE?:UMz.9pw?fr!2F' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
