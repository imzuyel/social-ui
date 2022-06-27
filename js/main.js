
const menuItems = document.querySelectorAll('.menu-item');
var notification = document.querySelector('.notifications-popup'),
  notificationCount = document.querySelector('.notification-count'),

  messageNotificationCount = document.querySelector('.notification-count-message'),
  messageNotification = document.querySelector('.message-notifications'),
  messages = document.querySelector('.messages'),
  message = document.querySelectorAll('.message'),
  messageSearch = document.querySelector('.messageSearch'),

  theme = document.querySelector('.theme'),
  themeModal = document.querySelector('.customize-theme'),

  fontSizes = document.querySelectorAll('.font-size span'),
  root = document.querySelector(':root'),

  colorPalet = document.querySelectorAll('.color span'),

  Bg1 = document.querySelector('.bg-1'),
  Bg2 = document.querySelector('.bg-2'),
  Bg3 = document.querySelector('.bg-3')



// Remove active menu
const changeActiveMenu = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

// MenuItem
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveMenu();
    item.classList.add('active');
    if (item.id != 'notifications') {
      notification.style.display = 'none';
    } else {
      notification.style.display = 'block';
      notificationCount.style.display = 'none';
    };
  })
});

// Messages
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = 'var(--box-shadow)';
  messageNotificationCount.style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});
// Message Search button
SearchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  })
}
messageSearch.addEventListener('keyup', SearchMessage)



// Theme Cutomize
// Open modal
openThemeModal = () => {
  themeModal.style.display = "grid";
}
// close modal
closThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}
themeModal.addEventListener('click', closThemeModal);
theme.addEventListener('click', openThemeModal);


// Fonts

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}

fontSizes.forEach(size => {
  let fontSize;
  size.addEventListener('click', () => {
    if (size.classList.contains('font-size-1')) {
      removeSizeSelector();
      size.classList.toggle('active');
      fontSize = '10px';
      root.style.setProperty(' --sticky-top-left', ' 5.4rem');
      root.style.setProperty(' --sticky-top-right', '5.4rem');
    }
    if (size.classList.contains('font-size-2')) {
      removeSizeSelector();
      size.classList.toggle('active');
      fontSize = '13px';
      root.style.setProperty(' --sticky-top-left', ' 5.4rem');
      root.style.setProperty(' --sticky-top-right', '-7rem');
    }
    if (size.classList.contains('font-size-3')) {
      removeSizeSelector();
      size.classList.toggle('active');
      fontSize = '16px';
      root.style.setProperty(' --sticky-top-left', ' -2rem');
      root.style.setProperty(' --sticky-top-right', '-17rem');
    }
    if (size.classList.contains('font-size-4')) {
      removeSizeSelector();

      size.classList.toggle('active');
      fontSize = '18px';
      root.style.setProperty(' --sticky-top-left', ' -5rem');
      root.style.setProperty(' --sticky-top-right', '-25rem');
    }
    if (size.classList.contains('font-size-5')) {
      removeSizeSelector();
      size.classList.toggle('active');
      fontSize = '22px';
      root.style.setProperty(' --sticky-top-left', ' -12rem');
      root.style.setProperty(' --sticky-top-right', '-35rem');

    }
    // Change Fonts size
    document.querySelector('html').style.fontSize = fontSize;
  })


})

// Color

const changeActiveColor = () => {
  colorPalet.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

colorPalet.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveColor();
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    }
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    } else {
      primaryHue = 252;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})


// Background

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();

});


Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';


  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();

});

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';


  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  Bg3.classList.add('active');
  changeBG();

})