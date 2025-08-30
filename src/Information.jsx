import React from "react";

function Information() {
  return (
    <div className="bg-blue-50 p-6 shadow-md rounded-md">
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About This Project</h2>
      <p className="mb-4 text-gray-700">
        This application allows you to upload video files, transcode them to
        different resolutions and formats using{" "}
        <a
          href="https://ffmpeg.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          FFmpeg
        </a>
        , and extract media details using{" "}
        <a
          href="https://ffmpeg.org/ffprobe.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          FFprobe
        </a>
        .
      </p>

      <h3 className="text-xl font-semibold mb-2">Features</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Upload video files directly from the browser</li>
        <li>Transcode to different resolutions (360p, 720p, 1080p, etc.)</li>
        {/* <li>Choose video codecs (H.264, H.265, VP9, AV1)</li> */}
        {/* <li>Set video/audio bitrate and quality</li> */}
        <li>Extract metadata (duration, resolution, codec, bitrate, FPS)</li>
        {/* <li>Generate thumbnails for preview</li> */}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
      <p className="text-gray-700 mb-4">
        <strong>Frontend:</strong> React.js + Tailwind CSS <br />
        <strong>Backend:</strong> Node.js + Express.js <br />
        <strong>Media Processing:</strong> FFmpeg, FFprobe <br />
      </p>

      <h3 className="text-xl font-semibold mb-2">Resources</h3>
      <ul className="list-disc list-inside text-blue-600">
        <li>
          <a
            href="https://ffmpeg.org/documentation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            FFmpeg Documentation
          </a>
        </li>
        <li>
          <a
            href="https://ffmpeg.org/ffprobe.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            FFprobe Documentation
          </a>
        </li>
        <li>
          <a
            href="https://trac.ffmpeg.org/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            FFmpeg Wiki & Examples
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Information;
