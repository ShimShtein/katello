/**
 * Copyright 2014 Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

(function () {
    'use strict';

    /**
     * @ngdoc factory
     * @name  Bastion.puppet-modules.factory:PuppetModule
     *
     * @description
     *   Provides a BastionResource for interacting with Puppet Modules
     */
    function PuppetModule(BastionResource) {
        return BastionResource('/katello/api/v2/puppet_modules/:id',
            {'id': '@id'}
        );

    }

    angular
        .module('Bastion.puppet-modules')
        .factory('PuppetModule', PuppetModule);

    PuppetModule.$inject = ['BastionResource'];

})();
