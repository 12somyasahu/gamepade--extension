# 🎮 Gamepad Browser Controller

Control your browser with a gamepad! Watch videos, browse websites, and click anything using your Xbox, PlayStation, or any other controller.

## ✨ What Does It Do?

This extension lets you use your game controller to:
- Play/pause videos
- Control volume and playback speed
- Scroll pages and move a cursor
- Click buttons and links
- Navigate back/forward in your browser
- Go fullscreen
- And much more!

Works great on YouTube, Netflix, Twitch, and basically any website with videos.

## 🚀 How to Install

### Step 1: Download the Extension
1. Download or clone this repository to your computer
2. Unzip it if needed

### Step 2: Load in Chrome
1. Open Chrome (or Edge, Brave, Opera)
2. Type `chrome://extensions/` in the address bar
3. Turn ON **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the folder with the extension files
6. Done! You'll see the gamepad icon in your toolbar

### Step 3: Connect Your Controller
1. Plug in your Xbox, PlayStation, or other gamepad (or connect via Bluetooth)
2. Press any button on the controller to wake it up
3. The extension will detect it automatically

## 🎯 How to Use

### Basic Controls

**Face Buttons:**
- **A / Cross (●)** - Play/Pause videos
- **B / Circle (●)** - Go back (like the back button in browser)
- **X / Square (■)** - Mute/Unmute
- **Y / Triangle (▲)** - Fullscreen

**Bumpers:**
- **LB** - Previous video/episode
- **RB** - Next video/episode

**Triggers:**
- **Left Trigger (LT)** - Slow down video (squeeze for 0.25x to 1x speed)
- **Right Trigger (RT)** - Speed up video (squeeze for 1x to 2x speed)

**D-Pad:**
- **Up** - Volume up
- **Down** - Volume down
- **Left** - Rewind 10 seconds
- **Right** - Forward 10 seconds

**Analog Sticks:**
- **Left Stick** - Scroll the page up/down
- **Right Stick** - Move the cursor around the screen
- **L3 (Left stick click)** - Left click (click buttons, links, play buttons!)
- **R3 (Right stick click)** - Right click (open menus)

### Using the Cursor

The right stick controls a glowing cursor on your screen. Move it over anything you want to click:
- Video play buttons
- Links
- Buttons
- Menu items

Then press **L3** (click the left stick) to click it, or **R3** for right-click.

## ⚙️ Customize Your Controls

Don't like the default button layout? Change it!

1. Click the **gamepad icon** in your browser toolbar
2. Click **"⚙️ Customize Controls"**
3. Use the dropdowns to change what each button does
4. Click **"💾 Save"** when you're done
5. Click **"🔄 Reset"** anytime to go back to defaults

You can map any button to any action, or disable buttons you don't use.

## 💡 Tips & Tricks

### For Videos
- Use **triggers** to watch at custom speeds (great for lectures or slow-motion)
- **L3 click** the video player to pause/play without using media keys
- **D-Pad left/right** to skip intros or replay funny moments
- **RB** to auto-advance to next episode on Netflix/YouTube

### For Browsing
- **B button** is your friend - instant back button
- Use the **cursor + L3** to click anything on the page
- **Left stick** scrolls smoothly through articles
- **Right-click (R3)** works on images, text, links - just like a mouse

### Quick Actions
- Need to mute fast? **X button**
- Want fullscreen? **Y button**
- Lost where the cursor is? Just wiggle the **right stick** - it'll show up

## 🔧 Troubleshooting

**Controller not detected?**
- Press any button to wake it up
- Check if it works in other games (to test the connection)
- Try unplugging and plugging it back in
- Some wireless controllers need to be paired first

**Clicks not working?**
- Make sure you're using **L3** (click the left stick), not just pressing A
- Move the cursor directly over what you want to click
- The cursor should flash when you click

**Extension not working on some sites?**
- Refresh the page after installing the extension
- Some sites like Chrome settings pages don't allow extensions
- Banking/secure sites may block extensions for security

**Want to reload the extension?**
1. Go to `chrome://extensions/`
2. Find "Gamepad Browser Controller"
3. Click the **🔄 refresh icon**
4. Reload the webpage you're testing

## 🎮 Supported Controllers

Tested and working:
- ✅ Xbox One / Series X|S controllers
- ✅ PlayStation 4 / PS5 DualSense controllers
- ✅ Nintendo Switch Pro Controller
- ✅ Generic USB gamepads
- ✅ Most Bluetooth controllers

Pretty much any controller that works with your computer will work!

## 🛠️ For Developers

### File Structure
```
gamepad-browser-controller/
├── manifest.json      # Extension config
├── background.js      # Service worker (minimal)
├── content.js        # Main gamepad logic
├── popup.html        # Settings UI
├── popup.js          # Settings logic
├── icon16.png        # Extension icons
├── icon48.png
└── icon128.png
```

### Making Changes
1. Edit the files
2. Go to `chrome://extensions/`
3. Click the **🔄 refresh icon** on the extension
4. Reload your test page
5. Changes are live!

### Key Features
- **Lightweight**: ~400 lines of clean, commented code
- **No dependencies**: Pure vanilla JavaScript
- **Efficient polling**: RequestAnimationFrame for smooth performance
- **Smart storage**: Only saves custom mappings, not entire config
- **Site-agnostic**: Works on any website

## 📝 Version History

### v2.0 (Current)
- Complete rewrite for better performance
- Fixed click simulation (now works on all elements!)
- Added adaptive trigger speed control
- Lightweight custom button mapping
- Improved cursor system
- Better site compatibility

### v1.0
- Initial release
- Basic gamepad controls
- Media playback support

## 🤝 Contributing

Found a bug? Have an idea? 
- Open an issue on GitHub
- Submit a pull request
- Or just star the repo if you like it!

## 📄 License

MIT License - feel free to use, modify, and share!

## ❤️ Enjoy!

Kick back, grab your controller, and browse the web from your couch. No more reaching for the mouse every time you want to pause a video!

Happy gaming! 🎮✨
