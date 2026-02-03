import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Link, FileSearch, Shield, Loader2, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ScanSectionProps {
  onScanStart: (type: 'file' | 'url', data: File | string) => void;
  isScanning: boolean;
}

const ScanSection = ({ onScanStart, isScanning }: ScanSectionProps) => {
  const [url, setUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileScan = () => {
    if (selectedFile) {
      onScanStart('file', selectedFile);
    }
  };

  const handleUrlScan = () => {
    if (url.trim()) {
      onScanStart('url', url.trim());
    }
  };

  return (
    <section className="py-24 relative" id="scan">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            <FileSearch className="w-4 h-4" />
            Threat Analysis Center
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Scan for <span className="text-gradient">Threats</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload a file or enter a website URL to check for malware, viruses, 
            and other security threats instantly.
          </p>
        </motion.div>

        {/* Scan interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 gradient-border">
            <Tabs defaultValue="file" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
                <TabsTrigger
                  value="file"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  File Upload
                </TabsTrigger>
                <TabsTrigger
                  value="url"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link className="w-4 h-4 mr-2" />
                  URL Check
                </TabsTrigger>
              </TabsList>

              <TabsContent value="file" className="mt-0">
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-muted/30'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  <AnimatePresence mode="wait">
                    {selectedFile ? (
                      <motion.div
                        key="file"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="space-y-4"
                      >
                        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                          <FileSearch className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{selectedFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                          }}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                      >
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center"
                        >
                          <Upload className="w-8 h-8 text-muted-foreground" />
                        </motion.div>
                        <div>
                          <p className="font-semibold text-foreground">
                            Drop your file here
                          </p>
                          <p className="text-sm text-muted-foreground">
                            or click to browse
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Supports: EXE, DLL, PDF, DOC, ZIP and more
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  onClick={handleFileScan}
                  disabled={!selectedFile || isScanning}
                  className="w-full mt-6 h-12 bg-gradient-cyber text-primary-foreground font-semibold btn-glow"
                >
                  {isScanning ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing File...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5 mr-2" />
                      Scan File
                    </>
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="url" className="mt-0">
                <div className="space-y-6">
                  <div className="relative">
                    <Link className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="url"
                      placeholder="Enter website URL (e.g., https://example.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-12 h-14 bg-input border-border focus:border-primary input-cyber text-base"
                    />
                  </div>

                  <div className="flex items-start gap-2 p-4 rounded-lg bg-muted/30 border border-border">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      We'll analyze the URL for phishing attempts, malicious redirects, 
                      suspicious scripts, and known threat databases.
                    </p>
                  </div>

                  <Button
                    onClick={handleUrlScan}
                    disabled={!url.trim() || isScanning}
                    className="w-full h-12 bg-gradient-cyber text-primary-foreground font-semibold btn-glow"
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing URL...
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 mr-2" />
                        Check URL
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScanSection;
