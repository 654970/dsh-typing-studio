# KeyFlow Typing Studio · 键语打字训练

A bilingual typing practice panel for the DeepSeek Harness Web UI.

Repository: [654970/dsh-typing-studio](https://github.com/654970/dsh-typing-studio)

**中文**：中英文双语打字训练插件，带计时短文、输入法友好的评分、逐字反馈和本地记录。

## Features

- **Chinese and English practice** with 12 original passages across everyday life, technology, and culture.
- **Timed sessions** of 30, 60, or 120 seconds.
- **IME-aware Chinese input** — only committed text is scored, so pinyin candidate editing does not create false misses.
- **Per-character feedback** with correct, incorrect, and current-character states. The passage follows your position automatically.
- **Live statistics** for time left, speed, accuracy, and passage progress.
- **Results and personal bests** in Chinese characters per minute or English net WPM, with the latest attempts kept locally.
- **Bilingual interface** that follows the active Harness locale (`zh` / `en`).
- **No backend, no network requests, no telemetry.** Practice preferences and records stay in the browser's `localStorage`.

## Where it appears

After installation, open the keyboard icon in the left sidebar, labelled **打字训练** or **Typing Studio**. The trainer opens as a full central panel. A row is also available in the Plugin Manager.

## Scoring

- Chinese speed: correctly typed committed characters per minute.
- English speed: net words per minute, using five correct characters per word.
- Accuracy: first-commit correct characters divided by all committed attempts. Correcting a mistake does not erase the earlier attempt.
- A session needs at least 10 seconds and enough correct characters (20 for English, 10 for Chinese) to count toward the personal best.

## Install

Once this repository is listed in the DSH plugin catalog, install **KeyFlow Typing Studio** from the plugin marketplace. The bundle declares the required `dsh.bundle` manifest and has no build step or runtime dependencies.

## Development

The plugin is a plain ES module bundle. `client.js` is the browser half; `index.js` is an intentionally empty Host half. All UI code is self-contained and only imports React from the Harness client module table.

## Privacy

The plugin writes two `localStorage` values: practice preferences and up to 16 practice records. Personal bests are derived from those records. Nothing is uploaded.

## License

[MIT](LICENSE) © KeyFlow contributors
