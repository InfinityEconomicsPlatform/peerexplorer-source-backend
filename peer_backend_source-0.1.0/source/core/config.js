/******************************************************************************
 * Copyright © 2017 XIN Community                                             *
 *                                                                            *
 * See the DEVELOPER-AGREEMENT.txt and LICENSE.txt files at  the top-level    *
 * directory of this distribution for the individual copyright  holder        *
 * information and the developer policies on copyright and licensing.         *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * XIN software, including this file, may be copied, modified, propagated,    *
 * or distributed except according to the terms contained in the LICENSE.txt  *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

module.exports = {
    port: 8888,
    seed: '199.127.137.169',
    peer: 23457,
    concurrent: 15,
    rankFactor:1.00,
    mongodb:{
        user:"apiUser",
        pass:"**yourPasswordHere**",
        host:'mongodb://localhost/peers'

    },
    adminkey:'**YourAdminKeyHere**'

};
