module.exports = function (accessLevelInteger) {
  // 1-admin, 2-regional, 3-supervisor, 4-regular
  var map = {
    0 : 'Super Admin',
    1 : 'Admin',
    2 : 'Regional',
    3 : 'Supervisor',
    4 : 'Regular',
  };

  if (map.hasOwnProperty(accessLevelInteger)){
    return map[accessLevelInteger];
  }
  else {
    new Error('therms-access-level module cannot map accessLevelInteger: ', accessLevelInteger);
    return '';
  }

};
