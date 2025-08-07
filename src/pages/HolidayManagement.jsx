import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const HolidayManagement = () => {
  const [selectedTab, setSelectedTab] = useState('calendar');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [holidayForm, setHolidayForm] = useState({
    name: '',
    date: '',
    type: 'public',
    description: '',
    mandatory: true,
    regions: ['all']
  });

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];

  const holidayTypes = [
    { value: 'public', label: 'Public Holiday', color: 'bg-blue-500' },
    { value: 'religious', label: 'Religious Holiday', color: 'bg-purple-500' },
    { value: 'national', label: 'National Holiday', color: 'bg-red-500' },
    { value: 'company', label: 'Company Holiday', color: 'bg-green-500' },
    { value: 'optional', label: 'Optional Holiday', color: 'bg-yellow-500' }
  ];

  const regions = ['all', 'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Bali'];

  const holidays = {
    '2024': [
      {
        id: 1,
        name: 'New Year\'s Day',
        date: '2024-01-01',
        type: 'public',
        description: 'First day of the Gregorian calendar year',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 2,
        name: 'Chinese New Year',
        date: '2024-02-10',
        type: 'religious',
        description: 'Traditional Chinese New Year celebration',
        mandatory: false,
        regions: ['Jakarta', 'Surabaya'],
        status: 'confirmed',
        created: '2023-11-15',
        lastModified: '2024-01-05'
      },
      {
        id: 3,
        name: 'Nyepi (Balinese New Year)',
        date: '2024-03-11',
        type: 'religious',
        description: 'Balinese Day of Silence',
        mandatory: true,
        regions: ['Bali'],
        status: 'confirmed',
        created: '2023-11-15',
        lastModified: '2023-11-15'
      },
      {
        id: 4,
        name: 'Good Friday',
        date: '2024-03-29',
        type: 'religious',
        description: 'Christian commemoration of the crucifixion',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 5,
        name: 'Eid al-Fitr',
        date: '2024-04-10',
        type: 'religious',
        description: 'End of Ramadan celebration',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-11-20',
        lastModified: '2024-01-15'
      },
      {
        id: 6,
        name: 'Labor Day',
        date: '2024-05-01',
        type: 'public',
        description: 'International Workers\' Day',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 7,
        name: 'Buddha Day',
        date: '2024-05-23',
        type: 'religious',
        description: 'Celebration of Buddha\'s birth',
        mandatory: false,
        regions: ['Jakarta', 'Bandung'],
        status: 'confirmed',
        created: '2023-11-15',
        lastModified: '2023-11-15'
      },
      {
        id: 8,
        name: 'Ascension of Jesus',
        date: '2024-05-09',
        type: 'religious',
        description: 'Christian celebration of Jesus\' ascension',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 9,
        name: 'Independence Day',
        date: '2024-08-17',
        type: 'national',
        description: 'Indonesian Independence Day',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 10,
        name: 'Eid al-Adha',
        date: '2024-06-17',
        type: 'religious',
        description: 'Festival of Sacrifice',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-11-20',
        lastModified: '2024-01-15'
      },
      {
        id: 11,
        name: 'Christmas Day',
        date: '2024-12-25',
        type: 'religious',
        description: 'Christian celebration of the birth of Jesus',
        mandatory: true,
        regions: ['all'],
        status: 'confirmed',
        created: '2023-12-01',
        lastModified: '2023-12-01'
      },
      {
        id: 12,
        name: 'Company Anniversary',
        date: '2024-09-15',
        type: 'company',
        description: 'Annual company founding celebration',
        mandatory: true,
        regions: ['all'],
        status: 'draft',
        created: '2024-01-10',
        lastModified: '2024-02-05'
      }
    ]
  };

  const tabs = [
    { id: 'calendar', label: 'Holiday Calendar', icon: 'CalendarIcon' },
    { id: 'list', label: 'Holiday List', icon: 'ListBulletIcon' },
    { id: 'statistics', label: 'Statistics', icon: 'ChartBarIcon' }
  ];

  const getCurrentMonth = () => {
    return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString(),
        holidays: getHolidaysForDate(current)
      });
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const getHolidaysForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return holidays[selectedYear]?.filter(holiday => holiday.date === dateString) || [];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getTypeColor = (type) => {
    const typeConfig = holidayTypes.find(t => t.value === type);
    return typeConfig ? typeConfig.color : 'bg-gray-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleHolidayClick = (holiday) => {
    setSelectedHoliday(holiday);
    setHolidayForm({
      name: holiday.name,
      date: holiday.date,
      type: holiday.type,
      description: holiday.description,
      mandatory: holiday.mandatory,
      regions: holiday.regions
    });
    setIsEditing(false);
    setShowHolidayModal(true);
  };

  const handleNewHoliday = () => {
    setSelectedHoliday(null);
    setHolidayForm({
      name: '',
      date: '',
      type: 'public',
      description: '',
      mandatory: true,
      regions: ['all']
    });
    setIsEditing(true);
    setShowHolidayModal(true);
  };

  const CalendarTab = () => {
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(parseInt(selectedYear));

    const navigateMonth = (direction) => {
      let newMonth = currentMonth + direction;
      let newYear = currentYear;

      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }

      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    };

    const days = getDaysInMonth(currentYear, currentMonth);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {monthName}
              </h2>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon name="ChevronLeftIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon name="ChevronRightIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <button
              onClick={handleNewHoliday}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Icon name="PlusIcon" className="w-4 h-4" />
              <span>Add Holiday</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
          {weekDays.map(day => (
            <div key={day} className="p-4 text-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {day}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <div
              key={index}
              className={`min-h-24 p-2 border-r border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                !day.isCurrentMonth ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${
                  day.isToday 
                    ? 'w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center' 
                    : day.isCurrentMonth 
                      ? 'text-gray-800 dark:text-white' 
                      : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {day.date.getDate()}
                </span>
              </div>

              <div className="space-y-1">
                {day.holidays.map((holiday, holidayIndex) => (
                  <div
                    key={holidayIndex}
                    onClick={() => handleHolidayClick(holiday)}
                    className={`px-1 py-0.5 ${getTypeColor(holiday.type)} text-white text-xs rounded cursor-pointer hover:opacity-80 transition-opacity truncate`}
                    title={holiday.name}
                  >
                    {holiday.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ListTab = () => {
    const yearHolidays = holidays[selectedYear] || [];
    const sortedHolidays = [...yearHolidays].sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {selectedYear} Holidays ({sortedHolidays.length})
          </h3>
          <button
            onClick={handleNewHoliday}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Icon name="PlusIcon" className="w-4 h-4" />
            <span>Add Holiday</span>
          </button>
        </div>

        {sortedHolidays.map(holiday => (
          <Card key={holiday.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleHolidayClick(holiday)}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${getTypeColor(holiday.type)} rounded-lg flex items-center justify-center`}>
                <Icon name="CalendarDaysIcon" className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {holiday.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {formatDate(holiday.date)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(holiday.status)}`}>
                      {holiday.status.charAt(0).toUpperCase() + holiday.status.slice(1)}
                    </span>
                    {holiday.mandatory && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full text-xs font-medium">
                        Mandatory
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">
                      {holiday.type.replace('_', ' ')} Holiday
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regions</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {holiday.regions.includes('all') ? 'All Regions' : holiday.regions.join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last Modified</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {formatDate(holiday.lastModified)}
                    </p>
                  </div>
                </div>

                {holiday.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {holiday.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  const StatisticsTab = () => {
    const yearHolidays = holidays[selectedYear] || [];
    const typeStats = holidayTypes.map(type => ({
      ...type,
      count: yearHolidays.filter(h => h.type === type.value).length
    }));

    const totalHolidays = yearHolidays.length;
    const mandatoryHolidays = yearHolidays.filter(h => h.mandatory).length;
    const confirmedHolidays = yearHolidays.filter(h => h.status === 'confirmed').length;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Icon name="CalendarDaysIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{totalHolidays}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Holidays</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{mandatoryHolidays}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mandatory</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{confirmedHolidays}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Confirmed</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {totalHolidays - confirmedHolidays}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
              </div>
            </div>
          </Card>
        </div>

        <Card title="Holiday Types Distribution">
          <div className="space-y-4">
            {typeStats.map(type => (
              <div key={type.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${type.color} rounded`}></div>
                  <span className="text-gray-700 dark:text-gray-300">{type.label}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${type.color}`}
                      style={{ width: `${totalHolidays > 0 ? (type.count / totalHolidays) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                    {type.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Regional Distribution">
            <div className="space-y-3">
              {regions.filter(region => region !== 'all').map(region => {
                const regionCount = yearHolidays.filter(h => 
                  h.regions.includes(region) || h.regions.includes('all')
                ).length;
                return (
                  <div key={region} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{region}</span>
                    <span className="font-medium text-gray-800 dark:text-white">{regionCount}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Monthly Distribution">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({length: 12}, (_, i) => {
                const monthHolidays = yearHolidays.filter(h => 
                  new Date(h.date).getMonth() === i
                ).length;
                const monthName = new Date(2024, i).toLocaleDateString('en-US', { month: 'short' });
                return (
                  <div key={i} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{monthName}</p>
                    <p className="font-bold text-gray-800 dark:text-white">{monthHolidays}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  const HolidayModal = () => {
    if (!showHolidayModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {isEditing ? (selectedHoliday ? 'Edit Holiday' : 'Add New Holiday') : 'Holiday Details'}
            </h2>
            <button
              onClick={() => setShowHolidayModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {isEditing ? (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Holiday Name *
                  </label>
                  <input
                    type="text"
                    value={holidayForm.name}
                    onChange={(e) => setHolidayForm({...holidayForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter holiday name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={holidayForm.date}
                    onChange={(e) => setHolidayForm({...holidayForm, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Holiday Type *
                  </label>
                  <select
                    value={holidayForm.type}
                    onChange={(e) => setHolidayForm({...holidayForm, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {holidayTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Applicable Regions
                  </label>
                  <select
                    multiple
                    value={holidayForm.regions}
                    onChange={(e) => setHolidayForm({
                      ...holidayForm, 
                      regions: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {regions.map(region => (
                      <option key={region} value={region}>
                        {region === 'all' ? 'All Regions' : region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={holidayForm.description}
                  onChange={(e) => setHolidayForm({...holidayForm, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Enter holiday description..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="mandatory"
                  checked={holidayForm.mandatory}
                  onChange={(e) => setHolidayForm({...holidayForm, mandatory: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="mandatory" className="text-sm text-gray-700 dark:text-gray-300">
                  Mandatory holiday (all employees must observe)
                </label>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {selectedHoliday ? 'Update Holiday' : 'Create Holiday'}
                </button>
              </div>
            </form>
          ) : selectedHoliday && (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 ${getTypeColor(selectedHoliday.type)} rounded-lg flex items-center justify-center`}>
                  <Icon name="CalendarDaysIcon" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {selectedHoliday.name}
                  </h3>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedHoliday.status)}`}>
                      {selectedHoliday.status.charAt(0).toUpperCase() + selectedHoliday.status.slice(1)}
                    </span>
                    {selectedHoliday.mandatory && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full text-xs font-medium">
                        Mandatory
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Date</h4>
                  <p className="text-gray-600 dark:text-gray-400">{formatDate(selectedHoliday.date)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Type</h4>
                  <p className="text-gray-600 dark:text-gray-400 capitalize">
                    {selectedHoliday.type.replace('_', ' ')} Holiday
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Regions</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedHoliday.regions.includes('all') ? 'All Regions' : selectedHoliday.regions.join(', ')}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Last Modified</h4>
                  <p className="text-gray-600 dark:text-gray-400">{formatDate(selectedHoliday.lastModified)}</p>
                </div>
              </div>

              {selectedHoliday.description && (
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedHoliday.description}</p>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowHolidayModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Holiday
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'calendar':
        return <CalendarTab />;
      case 'list':
        return <ListTab />;
      case 'statistics':
        return <StatisticsTab />;
      default:
        return <CalendarTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Holiday Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage company holidays and public observances
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map(year => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export Calendar"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={handleNewHoliday}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Add Holiday"
            >
              <Icon name="PlusIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Holiday Modal */}
      <HolidayModal />
    </DashboardLayout>
  );
};

export default HolidayManagement;