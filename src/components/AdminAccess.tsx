import { useState } from 'react';
import { Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminAccess = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  // ⚠️ CAMBIA QUESTA PASSWORD CON LA TUA!
  const ADMIN_PASSWORD = 'GiorgiaAdmin2024';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      window.open('https://digital-atelier.sanity.studio', '_blank');
      setOpen(false);
      setPassword('');
      setError('');
    } else {
      setError('Password non corretta');
      setPassword('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
          title="Accesso Admin"
        >
          <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-sm">Admin</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Accesso Dashboard Admin</DialogTitle>
          <DialogDescription>
            Inserisci la password per accedere allo Studio Sanity
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? 'border-red-500' : ''}
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Accedi
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setOpen(false);
                setPassword('');
                setError('');
              }}
            >
              Annulla
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAccess;